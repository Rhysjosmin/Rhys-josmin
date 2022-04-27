var MAX_PARTICLES = 1000,
	RADIUS = 100,
	MAX_LINES = 5,
	MAX_LIFE_SPAN = 600,
	MIN_DENSITY = 15,
	OFFSET_DENSITY = 15,
	_context,
	_mouseX,
	_mouseY,
	_particles,
	_canvasWidth,
	_canvasHalfWidth,
	_canvasHeight,
	_canvasHalfHeight;

init();

function init() {

	_particles = [];
	_context = c.getContext('2d');

	window.addEventListener('resize', onResize);
	window.addEventListener('mousemove', onMouseMove);

	onResize();

	createInitialParticles();

	redraw();
}

function createInitialParticles() {

	var x;

	for (x = 50; x < _canvasWidth - 50; x += 25) {

		_particles.push(new Particle(x - _canvasHalfWidth,  -75 + (Math.random() * 100)));
	}
}

function onMouseMove(e) {

	_mouseX = e.pageX;
	_mouseY = e.pageY;
}

function onResize() {

	_canvasWidth = c.offsetWidth;
	_canvasHalfWidth = Math.round(_canvasWidth / 2);
	_canvasHeight = c.offsetHeight,
	_canvasHalfHeight = Math.round(_canvasHeight / 2);

	c.width = _canvasWidth;
	c.height = _canvasHeight;
}

function redraw() {

	var copyParticles = _particles.slice(),
		particle,
		i;

	if (_particles.length < MAX_PARTICLES && _mouseX && _mouseY) {

		particle = new Particle(_mouseX - _canvasHalfWidth, _mouseY - _canvasHalfHeight);
		
		_particles.push(particle);
		_mouseX = false;
		_mouseY = false;
	}

	_context.clearRect(0, 0, _canvasWidth, _canvasHeight);

	for (i = 0; i < copyParticles.length; i++) {

		particle = copyParticles[i];
		particle.update();
	}

	drawLines();

	requestAnimationFrame(redraw);
}

function drawLines() {

	var particleA,
		particleB,
		distance,
		opacity,
		lines,
		i,
		j;

	_context.beginPath();

	for (i = 0; i < _particles.length; i++) {

		lines = 0;
		particleA = _particles[i];

		for (j = i + 1; j < _particles.length; j++) {

			particleB = _particles[j];
			distance = getDistance(particleA, particleB);

			if (distance < RADIUS) {
				
				lines++;
				
				if (lines <= MAX_LINES) {

					opacity = 0.5 * Math.min((1 - distance / RADIUS), particleA.getOpacity(), particleB.getOpacity());
					_context.beginPath();
					_context.moveTo(particleA.getX() + _canvasHalfWidth, particleA.getY() + _canvasHalfHeight);
					_context.lineTo(particleB.getX() + _canvasHalfWidth, particleB.getY() + _canvasHalfHeight);
					_context.strokeStyle = 'rgba(255,255,255,' + opacity + ')';
					_context.stroke();
				}
			}
		}
	}
}

function Particle(originX, originY) {

	var _this = this,
		_direction = -1 + Math.round(Math.random()) * 2,
		_angle = Math.random() * 10,
		_posX = originX,
		_posY = originY,
		_density = MIN_DENSITY + Math.random() * OFFSET_DENSITY,
		_lifeSpan = 0,
		_opacity = 1;

	function update() {

		_lifeSpan++;

		if (_lifeSpan % 3 === 0) {

			_opacity = 1 - _lifeSpan / MAX_LIFE_SPAN;

			_angle += 0.001 * _direction;
			_posY += (Math.cos(_angle + _density) + 1) * 0.75;
			_posX += Math.sin(_angle) * 0.75;

			if (_lifeSpan >= MAX_LIFE_SPAN) {

				destroy();
			}
		}
	}

	function destroy() {

		var particle,
				i;

		for (i = 0; i < _particles.length; i++) {

			particle = _particles[i];

			if (particle === _this) {

				_particles.splice(i, 1);
			}
		}
	}

	this.getOpacity = function() { return _opacity; };
	this.getX = function() { return _posX; };
	this.getY = function() { return _posY; };
	
	this.update = update;
}

function getDistance(particle1, particle2) {

	var deltaX = particle1.getX() - particle2.getX(),
		deltaY = particle1.getY() - particle2.getY();

	return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}