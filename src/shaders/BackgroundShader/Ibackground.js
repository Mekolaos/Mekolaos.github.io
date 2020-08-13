let bg_shader;
let bg_canvas;
let bg_texture;
let color = 0;
var c_height = 150;

function preload() {
    bg_shader = loadShader("../src/shaders/BackgroundShader/Ibackground.vert", "../src/shaders/BackgroundShader/Ibackground.frag")
}

function windowResized() {
    resizeCanvas(windowWidth, c_height);
}

function setup() {
    bg_canvas = createCanvas(windowWidth, c_height, WEBGL);
    bg_canvas.parent("B-Images");
    bg_canvas.position(0, 0);
    bg_canvas.style('z-index', '-1');
    bg_texture = createGraphics(windowHeight, c_height, WEBGL);

    bg_texture.noStroke();
}

function draw() {

    background(color++ % 255);
    bg_texture.shader(bg_shader);
    bg_shader.setUniform("resolution", [width, height]);
    bg_shader.setUniform("mouse", [mouseX, map(mouseY, 0, height, height, 0)]);
    bg_texture.rect(0, 0, width, height);
    texture(bg_texture);

    box(width, height);
}

