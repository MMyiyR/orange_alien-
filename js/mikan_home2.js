$(function(){
var scene, camera, renderer, mesh, model;
var meshFloor, ambientLight;
var width = 2000;
var height = 1100;

var crate, crateTexture, crateNormalMap, crateBumpMap;

var keyboard = {};
var player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

	mesh = new THREE.Mesh(
		new THREE.BoxGeometry(50,50,50),
		new THREE.MeshPhongMaterial({color:0xff4444, wireframe:true})
	);
	mesh.position.set(0,0,10);
	mesh.receiveShadow = true;
	mesh.castShadow = true;
	scene.add(mesh);

	// meshFloor = new THREE.Mesh(
	// new THREE.PlaneGeometry(20,20, 10,10),
	// new THREE.MeshPhongMaterial({color:0xffffff, wireframe:false})
	// );
	// meshFloor.rotation.x -= Math.PI / 2;
	// meshFloor.receiveShadow = true;
	// scene.add(meshFloor);


// light
	ambientLight = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambientLight);




	// GLTF/GLB
  let clock = new THREE.Clock();

	var gltfLoader = new THREE.GLTFLoader();
  gltfLoader.setCrossOrigin( 'anonymous' );



	gltfLoader.load("/models/mkn3D2.glb", function(gltf){
		model = gltf.scene;
    model.scale.set(1,1,1);
    model.position.set(0,2,10);

    var animations = gltf.animations;
    var mixer = new THREE.AnimationMixer(model);

    const anime = mixer.clipAction(animations[0]);
    anime.setLoop(THREE.LoopOnce)
    anime.clampWhenFinished = true

    anime.play();

    scene.add(model);

  });

function render() {
  if(mixer){
      mixer.update(clock.getDelta());
  }
}




	camera.position.set(0, player.height, -5);
	camera.lookAt(new THREE.Vector3(0,player.height,0));

	renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#canvas')
	});
	renderer.setSize(width, height);

	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;

	renderer.setClearColor(0xffd700);

	document.body.appendChild(renderer.domElement);

	animate();
  function animate(){
    requestAnimationFrame(animate);

		window.onload=function(){
			// mouse
			document.body.addEventListener("mousemove", function(mausu){

				var mX = mausu.pageX;  //X
				var mY = mausu.pageY;  //Y

				// model.rotation.x = mY / 50;
				// model.rotation.y = mX / 50;

			});
		}
    model.rotation.x -= 0.00525;
    model.rotation.y += 0.0035;

		mesh.rotation.x -= 0.000525;
		mesh.rotation.y += 0.00035;
		mesh.rotation.z += 0.000705;




    renderer.render(scene, camera);
  };

	onResize();
	window.addEventListener('resize', onResize);

	function onResize() {
	 var width = window.innerWidth;
	 var height = window.innerHeight;

	 renderer.setPixelRatio(window.devicePixelRatio);
	 renderer.setSize(width, height);

	 camera.aspect = width / height;
	 camera.updateProjectionMatrix();
	}


	$('.page:nth-child(1)').on('click',function(){
		$(this).addClass('mekuru');
		 if ($(this).hasClass("mekuru")){
			$(".book-setumei p").not(".book-setumei p:eq(1)").fadeOut();
			$(".book-setumei p:eq(1)").delay(400).fadeIn();
		};
	});

	$('.page:nth-child(2)').on('click',function(){
		$(this).addClass('mekuru');
		 if ($(this).hasClass("mekuru")){
			$(".book-setumei p").not(".book-setumei p:eq(0)").fadeOut();
			$(".book-setumei p:eq(0)").delay(400).fadeIn();
		};
	});

	$('.page:nth-child(3)').on('click',function(){
		$(this).addClass('mekuru');
		 if ($(this).hasClass("mekuru")){
			$(".book-setumei p").not(".book-setumei p:eq(2)").fadeOut();
			$(".book-setumei p:eq(2)").delay(400).fadeIn();
		};
	});

	$('.page:nth-child(4)').on('click',function(){
		$(this).addClass('mekuru');
		 if ($(this).hasClass("mekuru")){
			$(".book-setumei p").not(".book-setumei p:eq(1)").fadeOut();
			$(".book-setumei p:eq(1)").delay(400).fadeIn();
		};
	});

	$('.page:nth-child(5)').on('click',function(){
		$(this).addClass('mekuru');
		 if ($(this).hasClass("mekuru")){
			$(".book-setumei p").not(".book-setumei p:eq(3)").fadeOut();
			$(".book-setumei p:eq(3)").delay(400).fadeIn();
		};
	});

	$('.page:nth-child(6)').on('click',function(){
		$(this).addClass('mekuru');
		 if ($(this).hasClass("mekuru")){
			$(".book-setumei p").not(".book-setumei p:eq(2)").fadeOut();
			$(".book-setumei p:eq(2)").delay(400).fadeIn();
		};
	});

});
