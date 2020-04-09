/*
  Demo for CreateJS' new StageGL update.
  click to add more beams
*/
'use strict'
/**
 * Globals and Imports
 */
if ($('#animatedCanvasParent').length > 0) {
  function _typeof(obj) {
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      _typeof = function _typeof(obj) {
        return typeof obj
      }
    } else {
      _typeof = function _typeof(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }
    }
    return _typeof(obj)
  }

  function _instanceof(left, right) {
    if (
      right != null &&
      typeof Symbol !== 'undefined' &&
      right[Symbol.hasInstance]
    ) {
      return !!right[Symbol.hasInstance](left)
    } else {
      return left instanceof right
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
      return call
    }
    return _assertThisInitialized(self)
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return _getPrototypeOf(o)
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return self
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    return Constructor
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true },
    })
    if (superClass) _setPrototypeOf(subClass, superClass)
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }
    return _setPrototypeOf(o, p)
  }

  function init() {
    var data = {
      images: [queue.getResult('gfx')],
      frames: [
        // x, y, width, height, imageIndex*, regX*, regY*
        [0, 0, 230, 275, 0, 115, 137],
        [0, 275, 330, 40, 0, 165, 20],
        [0, 322, 145, 42, 0, 145, 41],
        [0, 465, 512, 47, 0, 256, 24],
        [384, 0, 128, 128, 0, 64, 64],
      ],
      animations: {
        logo: 0,
        intro: 1,
        createjs: 2,
        tagline: 3,
        dot: 4,
      },
    }
    createBackground(queue.getResult('bg'))
    // createBackground("/bg.jpg");
    spriteSheet = new createjs.SpriteSheet(data)
    // window.addEventListener("mousemove", updateMouse);
    // window.addEventListener("touchmove", updateTouch);
    window.addEventListener('mousedown', function () {
      return (mouse.buttonState = true)
    })
    window.addEventListener('mouseup', function () {
      return (mouse.buttonState = false)
    })

    // if (addBeams) {
    //     addEventListener("click", newBeam);
    // }

    createjs.Ticker.timingMode = createjs.Ticker.RAF
    createjs.Ticker.addEventListener('tick', update)
    if (
      document.getElementById('animatedCanvas') !== undefined &&
      document.getElementById('animatedCanvas') !== null
    ) {
      document.getElementById('animatedCanvas').style.display = 'block'
    }
    createBeams()
    if (stage !== undefined && stage !== null) {
      stage.on('resize', resize)
    }
    // LabTemplate.setupStageResize(stage);
    // LabTemplate.loadComplete();
    resize()
  }

  function progress(e) {
    // LabTemplate.loadProgress(e);
  }

  function createBeams() {
    var particleSprite = new createjs.Sprite(spriteSheet, 'dot')
    new BeamGroup(
      2000,
      0.5,
      beamWidth,
      canvasHeight / 3,
      0,
      0.3,
      particleSprite,
      beamInstances
    )
    new BeamGroup(
      2000,
      0.8,
      beamWidth,
      canvasHeight / 2.5,
      canvasWidth / 2,
      0.2,
      particleSprite,
      beamInstances
    )
    new BeamGroup(
      250,
      0.65,
      beamWidth,
      canvasHeight / 4,
      canvasWidth,
      0.1,
      particleSprite,
      beamInstances
    )
    var beams = [
      {
        density: 300,
        scatter: 600,
        width: beamWidth,
        height: canvasHeight / 2,
        particleOpacity: 0.01,
        particleScale: 1.5,
        timeRate: 0.4,
        rotateSpeed: 0.3,
        parallax: 0.1,
        phase: canvasWidth / 2,
        y: -canvasHeight / 5,
      },
      {
        density: 300,
        scatter: 450,
        width: beamWidth,
        height: canvasHeight / 1.5,
        particleOpacity: 0.01,
        particleScale: 2.5,
        timeRate: 0.5,
        rotateSpeed: 0.02,
        parallax: 0.05,
        phase: canvasWidth / 4,
        y: (canvasHeight / 5) * 2,
      },
    ]

    for (var i = 0; i < beams.length; i++) {
      var beam = new Beam(beams[i], particleSprite)
      beamInstances.push(beam)
      if (stage !== undefined && stage !== null) {
        stage.addChild(beam)
      }
    }
  }

  function resize() {
    if (stage !== undefined && stage !== null) {
      canvasWidth = window.innerWidth
      // canvasHeight = 200;
      canvasHeight = parent.offsetHeight + 10
      stage.canvas.width = canvasWidth
      stage.canvas.height = canvasHeight
      stage.updateViewport(canvasWidth, canvasHeight)
      ratio = canvasWidth / canvasHeight //baseTime = ratio;

      center.set(canvasWidth / 1.1, canvasHeight / 5)

      if (branding) {
        //positionLogo();
        positionCJSLogo() //positionIntro();
        //positionTagline();
      }

      if (canvasWidth < 1200) {
        canvasWidth = 1200
      }

      beamWidth = canvasWidth * 1.2

      for (var i = 0; i < beamInstances.length; i++) {
        beamInstances[i].width = beamWidth
      }

      bg.scaleX = canvasWidth / 1024
      bg.scaleY = canvasHeight / 1024 //Beam.globalTimeScalar = canvasWidth/canvasHeight;

      stage.update()
    }
  }

  function createBackground(img) {
    if (stage !== undefined && stage !== null) {
      bg = new createjs.Bitmap(img)
      bg.scaleX = canvasWidth / 1024
      bg.scaleY = canvasHeight / 1024
      stage.addChildAt(bg, 0)
    }
  }

  function updateMouse(e) {
    mouse.x = e.pageX - center.x
    mouse.y = e.pageY - center.y
  }

  function updateTouch(e) {
    mouse.x = e.touches[0].pageX - center.x
    mouse.y = e.touches[0].pageY - center.y
  }

  function draw() {
    stage.update()
  }

  function update() {
    var start = performance.now()
    var p = Vector3.multiply(mouse, 0.5)
    var loc = Vector3.add(p, center, p)

    if (
      beamInstances !== undefined &&
      beamInstances !== null &&
      beamInstances.length > 1
    ) {
      for (var i = 0; i < beamInstances.length; i++) {
        var beam = beamInstances[i]
        beam.trackingPoint = Vector3.add(
          Vector3.multiply(mouse, beam.parallax),
          center,
          loc
        )
        Beam.globalTimeScalar = mouse.x * 0.01
        beam.update()
      }

      draw()
      Beam.timeDelta = performance.now() - start
    }
  }

  function newBeam() {
    if (Beam.timeDelta < 11) {
      var particleSprite = new createjs.Sprite(spriteSheet, 'dot')
      new BeamGroup(
        500,
        0.6 + Math.random(),
        beamWidth,
        (canvasHeight / 2) * Math.random(),
        Math.random() * canvasWidth,
        Math.random() * 0.5,
        particleSprite,
        beamInstances
      )
    }
  }

  function positionIntro() {
    intro.x = introPos.x * canvasWidth
    intro.y = introPos.y * canvasHeight
    var scale = dynamicSize(intro, 0.5, 0.07)
    intro.scaleX = scale
    intro.scaleY = scale
  }

  function positionTagline() {
    tagline.x = taglinePos.x * canvasWidth
    tagline.y = taglinePos.y * canvasHeight
    var scale = dynamicSize(tagline, 0.8, 0.08)
    tagline.scaleX = scale
    tagline.scaleY = scale
  }

  function positionCJSLogo() {
    createjslogo.x = canvasWidth
    createjslogo.y = canvasHeight
    var scale = dynamicSize(createjslogo, 0.2, 0.1)
    createjslogo.scaleX = scale
    createjslogo.scaleY = scale
  }

  function positionLogo() {
    logo.positionOffset = new Vector3(0, 0)
    logo.x = logoPos.x * canvasWidth + logo.positionOffset.x
    logo.y = logoPos.y * canvasHeight + logo.positionOffset.y
    var scale = dynamicSize(logo, 0.4, 0.5)
    logo.scaleX = scale
    logo.scaleY = scale
  }

  function dynamicSize(sprite, widthScale, heightScale) {
    var bounds = sprite.getBounds() // console.log(ratio)

    if (ratio < 1) {
      return (canvasWidth / bounds.width) * widthScale
    } else {
      return (canvasHeight / bounds.height) * heightScale
    }
  }

  var Vector3 = Vexr.Vector3
  var queue = new createjs.LoadQueue() //queue.setPreferXHR = true;

  queue.on('complete', init)
  queue.on('progress', progress)
  queue.loadManifest([
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/261096/gfx.png',
      id: 'gfx',
    },
  ])

  var parent = document.getElementById('animatedCanvasParent')
  var stage = new createjs.StageGL('animatedCanvas', {
    antialias: true,
  })
  stage.setClearColor('#1caaf2')
  var canvasWidth = window.innerWidth
  var canvasHeight = parent.offsetHeight + 10
  stage.canvas.width = canvasWidth
  stage.canvas.height = canvasHeight
  var ratio = canvasWidth / canvasHeight
  var center = new Vector3(canvasWidth / 1.1, canvasHeight / 1.1)
  var mouse = new Vector3(window.innerWidth / 2, window.innerHeight / 2, 0)
  var addBeams = true
  var beamWidth = canvasWidth * 1.2
  var branding = false
  var logo, tagline, createjslogo, intro
  var spriteSheet
  var bg = null
  stage.update()

  /**
   * Beam Classes
   *
   */

  var baseTime = 1
  var globalTimeScalar = 1.5
  var timeDelta = 0
  var globalParticleCount

  var Beam =
    /*#__PURE__*/
    (function (_createjs$Container) {
      _inherits(Beam, _createjs$Container)

      _createClass(Beam, null, [
        {
          key: 'globalTimeScalar',
          get: function get() {
            return globalTimeScalar
          },
          set: function set(value) {
            globalTimeScalar = value
          },
        },
        {
          key: 'timeDelta',
          get: function get() {
            return globalParticleCount
          },
          set: function set(value) {
            globalParticleCount = value
          },
        },
      ])

      function Beam(params) {
        var _this

        var sprite =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : null

        _classCallCheck(this, Beam)

        _this = _possibleConstructorReturn(
          this,
          _getPrototypeOf(Beam).call(this)
        )
        _this.phase = 0
        _this.timeRate = 1
        _this.time = 0
        _this.density = 100
        _this.width = window.innerWidth
        _this.height = 100
        _this.scatter = 50
        _this.particleOpacity = 0.6
        _this.particleScale = 0.1
        _this.trackingPoint = new Vector3()
        _this.rotateSpeed = 1
        _this.parallax = 0.1
        _this.seed = Math.random() * 3
        Object.assign(_assertThisInitialized(_this), params)
        _this.points = []
        _this.zero = new Vector3()

        if (sprite != null && _instanceof(sprite, createjs.Sprite)) {
          _this.sprite = sprite.clone()

          _this.createPoints()
        }

        return _this
      }

      _createClass(Beam, [
        {
          key: 'setGraphic',
          value: function setGraphic(sprite) {
            this.sprite = sprite.clone()
            this.createPoints(sprite)
          },
        },
        {
          key: 'createPoints',
          value: function createPoints() {
            var amountOfDots = this.density

            for (var i = 0; i < this.density; i++) {
              var scale = this.particleScale * Math.random()
              var c = {}
              c.location = new Vector3()
              c.scatter = new Vector3(
                Math.random() * this.scatter,
                Math.random() * this.period(amountOfDots) * this.scatter
              )
              c.scatter.rotate(Math.random() * 360)
              c.rotateDirection = (Math.random() - 1) * 2 * this.rotateSpeed
              c.scale = scale
              c.graphic = this.sprite.clone()
              c.graphic.getBounds()
              c.graphic.regX =
                c.graphic.getBounds().width / 2 +
                (c.scatter.x * 1) / this.particleScale
              c.graphic.regY =
                c.graphic.getBounds().height / 2 +
                (c.scatter.y * 1) / this.particleScale
              c.graphic.alpha = Math.random() * this.particleOpacity
              c.graphic.scaleX = scale
              c.graphic.scaleY = scale
              this.addChild(c.graphic)
              this.points.push(c)
            }
          },
        },
        {
          key: 'updatePoints',
          value: function updatePoints() {
            var slice = this.width / this.points.length

            for (var i = 0; i < this.points.length; i++) {
              var c = this.points[i]
              var locY = this.trackingPoint.y
              var locX =
                ((this.trackingPoint.x +
                  this.width +
                  slice * i +
                  this.time +
                  this.phase) %
                  this.width) -
                100
              c.location.x = locX
              c.location.y =
                this.wave(this.time, slice * i, this.width, locY, this.height) +
                this.wave(
                  this.time * this.seed,
                  slice * i,
                  this.width / 2,
                  0,
                  this.height / 4
                )
              c.graphic.alpha =
                this.particleOpacity +
                this.wave(
                  this.time * this.seed,
                  slice * i,
                  this.width / 2,
                  0,
                  this.particleOpacity
                )
              c.graphic.scaleX = c.graphic.scaleY =
                c.scale *
                (0.75 +
                  this.wave(
                    this.time * this.seed,
                    slice * i,
                    this.width / 2,
                    0,
                    0.25
                  ))
              c.graphic.rotation += c.rotateDirection
              c.graphic.x = c.location.x
              c.graphic.y = c.location.y
            }
          },
        },
        {
          key: 'wave',
          value: function wave(time, phase, length, bias, amplitude) {
            amplitude *= 0.5
            return (
              bias +
              Math.cos(((phase + time) * this.period(length)) % 360) * amplitude
            )
          },
        },
        {
          key: 'period',
          value: function period(length) {
            return (2 * Math.PI) / length
          },
        },
        {
          key: 'update',
          value: function update() {
            this.time += this.timeRate * Beam.globalTimeScalar
            this.updatePoints()
          },
        },
      ])

      return Beam
    })(createjs.Container)
  /**
   *
   * Creates a bunch of beams that all follow the same wave
   */

  var beamgroups = []

  var BeamGroup =
    /*#__PURE__*/
    (function () {
      _createClass(BeamGroup, null, [
        {
          key: 'beams',
          get: function get() {
            return beamgroups
          },
        },
      ])

      function BeamGroup(
        density,
        scale,
        width,
        height,
        phase,
        parallax,
        sprite,
        collection
      ) {
        _classCallCheck(this, BeamGroup)

        var dist = density / 6
        beamgroups.push(this)
        this.beamCollection = []
        // this.seed = Math.random() * 1.5;
        this.seed = Math.random()
        // this.speed = 1 + Math.random();
        this.speed = 0.1 * Math.random()
        this.beams = [
          {
            density: Math.round(dist * 3),
            timeRate: this.speed,
            width: width,
            height: height,
            particleScale: scale / 10,
            particleOpacity: scale,
            parallax: parallax,
            phase: phase,
            seed: this.seed,
            rotateSpeed: this.seed,
          },
          {
            density: Math.round(dist * 2),
            timeRate: this.speed * 0.8,
            width: width,
            height: height,
            scatter: 100,
            particleScale: scale / 5,
            particleOpacity: scale / 5,
            parallax: parallax,
            phase: phase,
            seed: this.seed,
            rotateSpeed: this.seed,
          },
          {
            time: 30,
            density: Math.round(dist),
            timeRate: this.speed * 0.05,
            scatter: 25,
            width: width,
            height: height,
            particleOpacity: scale / 10,
            particleScale: scale - 0.2,
            parallax: parallax,
            phase: phase,
            seed: this.seed,
            rotateSpeed: this.seed,
          },
        ]

        if (stage !== undefined && stage !== null) {
          for (var i = 0; i < this.beams.length; i++) {
            var beam = new Beam(this.beams[i], sprite)
            this.beamCollection.push(beam)
            collection.push(beam)
            stage.addChild(beam)
          }
        }
      }

      return BeamGroup
    })()
  /**
   * Functions
   */

  var logoPos = new Vector3(0.5, 0.35)

  var taglinePos = new Vector3(0.5, 0.7)

  var introPos = new Vector3(0.5, 0.9)

  var beamInstances = []
}
