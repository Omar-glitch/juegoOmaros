const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cW = canvas.width;
const cH = canvas.height;
let rAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let cAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
let contador = 1;
const lista_teclas = {" " : false, "ArrowLeft" : false, "ArrowUp" : false, "ArrowRight" : false, "ArrowDown" : false};
let contador_intro = 600;
let speed = false;
let fast_throw = false;
let fast_bullet = true;
let end_game = false;
let level = 1;
let score = 0;
let health = 35;
let time = 70;
let bullets = 600;
let playing = false;
let item_counter = 0;
let random = null;
let item = null;

let sprite;
let audio_level;
let audio_intro;
let health_audio;
let time_audio;
let bullets_audio;
let fast_audio
let power_audio;
let explosion_audio;
let mybullet;
let cargas = 0;
let num_cargas = 0;

const get_audio = (src) => {
    const sound = new Audio();
    sound.src = src;
    sound.volume = 0;
    sound.addEventListener('canplaythrough', sound.play)
    return sound;
}

const load_song = () => {
    if (level < 4) return get_audio('ImgPruebas/Bomberman2.mp3');
    if (level < 7) return get_audio('ImgPruebas/RatchetGaspar.mp3');
    if (level < 9) return get_audio('ImgPruebas/RatchetAridia.mp3');
    return get_audio('ImgPruebas/Veldin.mp3');
}

const cargado = (e) => {
    cargas++;
    ctx.save();
    ctx.clearRect(0, 0, cW, cH)
    ctx.fillStyle = "white";
    ctx.font = "bold 1.25rem Righteous";
    ctx.fillText(`Cargando recursos (${cargas}/${num_cargas})`, 450, 580)
    ctx.restore();
    e.target.removeEventListener(e.type, cargado)
    if (cargas === num_cargas) show_intro_level();
}

const cargando = (num) => {
    cargas = 0;
    num_cargas = num;
    ctx.save();
    ctx.clearRect(0, 0, cW, cH)
    ctx.fillStyle = "white";
    ctx.font = "bold 1.25rem Righteous";
    ctx.fillText(`Cargando recursos (0/0)`, 450, 580)
    ctx.restore();
    
    audio_level = load_song();
    audio_intro = get_audio('ImgPruebas/Start.mp3');
    health_audio = get_audio('ImgPruebas/VidaExtra.mp3');
    time_audio = get_audio('ImgPruebas/Tiempo.mp3');
    bullets_audio = get_audio('ImgPruebas/BalasSonido.mp3');
    fast_audio = get_audio("ImgPruebas/velocidad.mp3");
    power_audio = get_audio('ImgPruebas/BalasAnti.mp3');
    explosion_audio = get_audio('ImgPruebas/Explosion.mp3');
    mybullet = get_audio("ImgPruebas/LaserModificado.m4a");
    sprite = new Image();
    sprite.addEventListener('load', cargado)
    sprite.src = 'ImgPruebas/sprite.png';
 
    audio_level.addEventListener('canplaythrough', cargado);
    mybullet.addEventListener('canplaythrough', cargado);
    audio_intro.addEventListener('canplaythrough', cargado);
    health_audio.addEventListener('canplaythrough', cargado);
    time_audio.addEventListener('canplaythrough', cargado);
    bullets_audio.addEventListener('canplaythrough', cargado);
    fast_audio.addEventListener('canplaythrough', cargado);
    power_audio.addEventListener('canplaythrough', cargado);
    explosion_audio.addEventListener('canplaythrough', cargado);
}

const image_properties = [
    {name: "enemie1", x: 300, y: 0, s: 150},
    {name: "enemie2", x: 600, y: 0, s: 150},
    {name: "enemie3", x: 0, y: 150, s: 150},
    {name: "enemie4", x: 300, y: 150, s: 150},
    {name: "enemie5", x: 600, y: 150, s: 150},
    {name: "enemie6", x: 0, y: 300, s: 150},
    {name: "enemie7", x: 300, y: 300, s: 150},
    {name: "enemie8", x: 600, y: 300, s: 150},
    {name: "enemie9", x: 0, y: 450, s: 150},
    {name: "enemie10", x: 300, y: 450, s: 150},
]

const reset_song = (song) => {
    song.volume = 1;
    song.currentTime = 0;
    song.play();
}

const power_up_properties = [
    {name: "health", x: 0, y: 700, s: 100, shadow: "red", f: function() {reset_song(health_audio)}},
    {name: "time", x: 200, y: 700, s: 100, shadow: "white", f: function() {reset_song(time_audio)}},
    {name: "bullets", x: 300, y: 700, s: 100, shadow: "yellow", f: function() {reset_song(bullets_audio)}},
    {name: "fast", x: 100, y: 700, s: 100, shadow: "blue", f: function() {reset_song(fast_audio)}},
    {name: "power", x: 400, y: 700, s: 100, shadow: "skyblue", f: function() {reset_song(power_audio)}}
]

const get_bullet = (obj, e) => {
    return {x: e.x + obj.x, y: e.y + obj.y, w: obj.w, h: obj.h, c: obj.c, sx: obj.sx, sy: 600, ix: obj.ix, iy: obj.iy, s: 100, r: obj.r}
}

// falto la posicion en x y y
const bullets_properties = [
    [{x: 30, y: 40, w: 7, h: 12, c: "yellow", ix: 0, iy: 5, r: 0}],
    [{x: 30, y: 40, w: 7, h: 12, c: "green", ix: 0, iy: 6, r: 0}],
    [{x: 30, y: 40, w: 30, h: 30, c: undefined, sx: 100, ix: 0, iy: 6, r: 0}],
    [{x: 30, y: 40, w: 30, h: 30, c: undefined, sx: 500, ix: 0, iy: 6, r: 0}],
    [{x: 30, y: 40, w: 30, h: 30, c: undefined, sx: 200, ix: -3, iy: 3, r: 45}, {x: 30, y: 40, w: 30, h: 30, c: undefined, sx: 200, ix: 3, iy: 3, r: -45}],
    [{x: 0, y: 40, w: 25, h: 25, c: undefined, sx: 400, ix: 0, iy: 6, r: 0}, {x: 80, y: 40, w: 25, h: 25, c: undefined, sx: 400, ix: 0, iy: 6, r: 0}],
    [{x: 30, y: 40, w: 7, h: 12, c: "blue", ix: 0, iy: 12, r: 0}],
    [{x: 0, y: 40, w: 30, h: 30, c: undefined, sx: 200, ix: -3, iy: 6, r: 45}, {x: 45, y: 40, w: 30, h: 30, c: undefined, sx: 200, ix: 3, iy: 6, r: -45}, {x: 28, y: 40, w: 30, h: 30, c: undefined, sx: 200, ix: 0, iy: 6, r: 0}],
    [{x: 30, y: 40, w: 20, h: 20, c: undefined, sx: 300, ix: 0, iy: 6, r: 0}],
    [{x: 10, y: 50, w: 20, h: 20, c: undefined, sx: 300, ix: -3, iy: 6, r: 0}, {x: 30, y: 50, w: 20, h: 20, c: undefined, sx: 300, ix: 3, iy: 6, r: 0}, {x: 50, y: 50, w: 20, h: 20, c: undefined, sx: 300, ix: 0, iy: 6, r: 0}],
]

const has_hitted = (a, b, x1, y1, x2, y2) => {
    let counter = 0;
    if (a.x > b.x + x1) counter++;
    if (a.x < b.x + x2) counter++;
    if (a.y > b.y + y1) counter++;
    if (a.y < b.y + y2) counter++;
    return 4 === counter;
}

const enemy_properties = [
    {id: 1, c: 6, w: 50, h: 50, vida: 1, m: 5, p: 100},
    {id: 2, c: 6, w: 50, h: 50, vida: 2, m: 5, p: 60},
    {id: 3, c: 6, w: 60, h: 60, vida: 3, m: 5, p: 40},
    {id: 4, c: 6, w: 50, h: 50, vida: 5, m: 6, p: 30},
    {id: 5, c: 6, w: 50, h: 50, vida: 10, m: 6, p: 70},
    {id: 6, c: 5, w: 80, h: 80, vida: 20, m: 8, p: 80},
    {id: 7, c: 6, w: 50, h: 50, vida: 12, m: 12, p: 60},
    {id: 8, c: 6, w: 50, h: 50, vida: 10, m: 10, p: 80},
    {id: 9, c: 7, w: 50, h: 50, vida: 50, m: 10, p: 20},
    {id: 10, c: 5, w: 75, h: 75, vida: 60, m: 8, p: 5}
]

function main() {
    audio_level.volume = 1;
    audio_level.currentTime = 0;

    let enemy_template = function (datos, posY) {
        return {
            x: Math.floor((Math.random() * 600) + 1),
            y: datos.h * posY + 10,
            w: datos.w,
            h: datos.h,
            m: datos.m,
            p: datos.p,
            direction: (Math.random() - 0.5 > 0),
            vida: datos.vida
        }
    }

    let enemies = [];
    for (let i = 0; i < enemy_properties[level - 1].c; i++) {
        enemies.push(new enemy_template(enemy_properties[level - 1], i));
    }

    const renderEnemies = function (lista_enemigos) {
        let e = image_properties[level - 1];
        for (let i = 0; i < lista_enemigos.length; i++) {
            let en = lista_enemigos[i];
            ctx.drawImage(sprite, (contador % 80 > 40) ? e.x : e.x + 150, e.y, e.s, e.s, en.x += en.direction ? -en.m : en.m, en.y, en.w, en.h);
            launcher.enemy_crash(en, i);
            if (en.x > cW - en.w) en.direction = true;
            if (en.x < cW - cW) en.direction = false;
            if (Math.floor(Math.random() * en.p) == 1) {
                for (const obj of bullets_properties[level - 1]) {
                    launcher.misiles_enemigos.push(get_bullet(obj, en));
                }
            } 
        }
    }

    function launche() {
        this.y = 500,
        this.x = cW / 2 - 25,
        this.w = 100,
        this.h = 100,
        this.misiles = [];
        this.misiles_enemigos = [];
        this.list_hits = [];
        this.ondas = [];
        this.colision_ships = [];

        this.render = function () {
            let aumento = (speed) ? 8 : 4;

            const t = lista_teclas;
            if (this.x > cW - 50) t["ArrowRight"] = false;
            if (this.x < 2) t["ArrowLeft"] = false;
            if (this.y > cH - 50) t["ArrowDown"] = false;
            if (this.y < 2) t["ArrowUp"] = false;
            
            if (t["ArrowRight"]) this.x += aumento;
            if (t["ArrowUp"]) this.y -= aumento;
            if (t["ArrowDown"]) this.y += aumento;
            if (t["ArrowLeft"]) this.x -= aumento;
            if (t[" "]) {
                if (fast_bullet) {
                    bullets -= 1;
                    fast_bullet = fast_throw;
                    mybullet.volume = 1;
                    mybullet.currentTime = (fast_throw) ? 0.02 : 0;
                    mybullet.play();
                    launcher.misiles.push({x: launcher.x + 22, y: launcher.y, w: 5, h: 10});
                    if (!fast_throw) setTimeout(() => fast_bullet = true, 300);
                }
            }
            // Creation of suicide ship
            if (level >= 5) {
                if (contador % 500 - (level * 30) === 0) {
                    this.colision_ships.push({x: this.x + cW, y: this.y - 50, a: this.x - 2, b: this.y - 5});
                }
                if (level >= 9) {
                    if (contador % 300 === 0) {
                        this.colision_ships.push({x: this.x + cW, y: this.y - 50, a: this.x - 2, b: this.y - 5});
                    }
                }
            }

            ctx.save();
            for (let i = 0; i < this.ondas.length; i++) {
                let onda = this.ondas[i];
                onda.r += 1.5;
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'red';
                canvas.style.transition = `border-color 0s`;
                canvas.style.borderColor = `red`;
                if (onda.r > 25) {
                    this.ondas.splice(i, 1);
                    canvas.style.transition = `border-color .4s`;
                    canvas.style.borderColor = `var(--green)`;
                }
            }
            ctx.drawImage(sprite, (contador % 80 > 40) ? 0 : 150, 0, 150, 150, this.x, this.y, 50, 50);
            ctx.restore();

            // Menú
            ctx.save();
            ctx.font = "normal 0.75rem Righteous";
            ctx.fillStyle = "green";
            ctx.drawImage(sprite, 0, 700, 100, 100, 10, cH - 67.5, 15, 15);
            ctx.fillText(`: ${health}`, 30, cH - 55);
            ctx.drawImage(sprite, 200, 700, 100, 100, 10, cH - 52.5, 15, 15);
            ctx.fillText(`: ${time}`, 30, cH - 40);
            ctx.drawImage(sprite, 300, 700, 100, 100, 10, cH - 37.5, 15, 15);
            ctx.fillText(`: ${bullets}`, 30, cH - 25);
            ctx.fillText(`Score: ${score}`, 10, cH - 10);
            ctx.restore();
            contador++;

            for (let i = 0; i < this.misiles.length; i++) {
                let m = this.misiles[i];
                ctx.fillStyle = "white";
                ctx.fillRect(m.x, m.y -= 12, m.w, m.h);
                this.bullet_hit_enemy(m, i);
                if (m.y <= 0) this.misiles.splice(i, 1);
            }
                        
            for (let i = 0; i < this.misiles_enemigos.length; i++) {
                const m = this.misiles_enemigos[i];
                
                ctx.save();
                if (m.c === undefined) {
                    ctx.translate(m.x + m.w / 2, m.y + m.h / 2);
                    ctx.rotate(m.r * Math.PI / 180);
                    ctx.drawImage(sprite, m.sx, m.sy, m.s, m.s, -m.w / 2, -m.h / 2, m.w, m.h);
                } else {
                    ctx.fillStyle = m.c;
                    ctx.fillRect(m.x, m.y, m.w, m.h);
                }
                ctx.restore();

                if (level === 9) {
                    if (this.x + 8 < m.x) m.x -= 3;
                    if (this.x + 14 > m.x) m.x += 3;
                }
                m.x += m.ix;
                m.y += m.iy;
                            
                this.bullet_hit(m, i);
                if (m.y >= cH) this.misiles_enemigos.splice(i, 1);
            }

            for (let i = 0; i < this.colision_ships.length; i++) {
                const collision_ship = this.colision_ships[i];
                ctx.save();
                ctx.shadowColor = 'red';
                ctx.shadowOffsetY = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowBlur = 5;
                ctx.drawImage(sprite, 600, 600, 100, 100, collision_ship.a, collision_ship.b, 60, 60);
                ctx.restore();
                ctx.drawImage(sprite, 600, 450, 150, 150, collision_ship.x -= 10, collision_ship.y += 0.6, 60, 60);
                if (collision_ship.x < - 50 || collision_ship.y > cH) this.colision_ships.splice(i, 1);
                this.suicide_ship_hit(collision_ship, i);
            }

            for (let i = 0; i < this.list_hits.length; i++) {
                const e = this.list_hits[i];
                ctx.save();
                ctx.fillStyle = e.y % 4 ? "yellow" : "red";
                ctx.font = 'bold 1.625rem Arial';
                ctx.fillText(e.vida, e.x + 16, e.y -= 2);
                ctx.restore()
                ctx.save();

                if (e.y < e.h) this.list_hits.splice(i, 1);
            }
        }
        // Fin de los renders
        this.enemie_defeated = (position) => {
            enemies.splice(position, 1);
            score += level;
            if (enemies.length === 0) setTimeout(clear_intervals, 1200);
        }

        this.bullet_hit_enemy = function (m, mi) {
            for (let g = 0; g < enemies.length; g++) {
                let e = enemies[g];
                if (has_hitted(m, e, 0, 0, e.w, e.w)) {
                    e.vida -= 1;
                    this.list_hits.push({x: e.x, y: e.y + 30, vida: e.vida, h: e.y - 10});
                    if (e.vida <= 0) this.enemie_defeated(g);
                    this.misiles.splice(mi, 1);
                }
            }
        }

        this.bullet_hit = function (misil) {
            if (has_hitted(misil, launcher, -7, 0, 48, 45)) {
                this.misiles_enemigos.splice(0, 30);
                if (health > 0) {
                    health = health - 1;
                    this.ondas.push({r: 0, c: 'red'});
                }
            }

            if (health < 1) clear_intervals();
        }

        this.suicide_ship_hit = function (ship, i) {
            if (has_hitted(ship, this, -40, -40, 40, 40))  {
                explosion_audio.play();
                this.colision_ships.splice(i, 1);
                health -= 3;
                this.ondas.push({r: 0, c: 'red'});
            }
        }

        this.enemy_crash = function (e, i) {
            if (has_hitted(e, this, -40, -50, 40, 40)) {
                this.enemie_defeated(i)
                health -= (level * 5);
                this.ondas.push({r: 0, c: 'red'})
            }
        }
        
        this.set_random_powerup = function () {
            random = Math.floor(Math.random() * 600);
            item = Math.floor(Math.random() * 5);
        }
        
        this.generate_powerup = function () {
            if (item_counter === 0) this.set_random_powerup();
            item_counter += 1;
            let x = random;
            let y = 500;
            let s = 30;
            let valor = false;
            let e = power_up_properties[item];

            if (item_counter > 500) {
                valor = true;
                ctx.save();
                ctx.shadowBlur = 8;
                ctx.shadowColor = e.shadow;
                ctx.drawImage(sprite, e.x, e.y, e.s, e.s, x, y, s, s);
                ctx.restore();
            } 
            
            if (item_counter > 1000) {
                item_counter = -1;
                valor = false;
            }
    
            if (item_counter > 450) {speed = false; fast_throw = false;}
    
            if (has_hitted(launcher, {x: x, y: y}, -50, -50, s, s) && valor) {
                item_counter = -1;
                if (item === 0) health += 3;
                if (item === 1) time += 25;
                if (item === 2) bullets += 75;
                if (item === 3) speed = true;
                if (item === 4) fast_throw = true;
                e.f();
                valor = false;
            }
        }
    }

    var launcher = new launche();

    const clear_intervals = () => {
        game_over();
        cAnimationFrame(animateMain);
    }

    const reset_values = () => {
        enemies = [];
        launcher.misiles = [];
        launcher.misiles_enemigos = [];
        launcher.ondas = [];
        launcher.list_hits = [];
    }

    function animate() {
        if (!end_game) {
            playing = true;
            ctx.clearRect(0, 0, cW, cH);
            launcher.render();
            launcher.generate_powerup();
            renderEnemies(enemies);

            if (bullets <= 0 || time <= 0 || health <= 0) clear_intervals();
            animateMain = rAnimationFrame(animate);
        }
    }

    function game_over() {
        end_game = true;
        playing = false;
        ctx.clearRect(0, 0, cW, cH);
        reset_values();
        audio_level.pause();

        if (bullets < 1) return mensaje('No hay balas');
        if (time < 1) return mensaje('Tiempo agotado');
        if (health < 1) return mensaje('Eliminado');
        if (level >= 10) return mensaje('Has ganado');

        level++;
        cargando(10)
        contador_intro = 600;
        bullets += 20;
        time += 50;
        health += 5;
        score += level * 10;
        end_game = false;
    }

    function mensaje(cadena) {
        var lon = (cW - (40 * cadena.length)) / 2;
        ctx.fillStyle = "white";
        ctx.clearRect(0, 0, cW, cH);
        ctx.font = "bold 4.6875rem Arial";
        ctx.fillText(cadena, lon, 220);
        const body = document.querySelector('body');
        const button = document.createElement('button');
        cAnimationFrame(animate);
        if (!document.querySelector('.jugar')) {
            button.classList.add('jugar');
            button.addEventListener('click', () => {
                button.parentElement.removeChild(button);
                reset();
            })
            button.innerHTML = "Reiniciar";
            body.appendChild(button);
        } 
    }

    var animateMain = rAnimationFrame(animate);
}

function show_intro_level() {
    audio_intro.volume = 1;
    audio_intro.currentTime = 0;
    canvas.style.transition = `border-color 0s`;
    canvas.style.background = "black";

    function message(sentence) {
        let lon = (cW - (32 * sentence.length)) / 2 + 5;
        ctx.save();
        ctx.font = "bold 4.6875rem Righteous";
        ctx.clearRect(0, 0, cW, cH);
        ctx.shadowBlur = 25;
        ctx.fillStyle = `hsl(${contador_intro / 2}, 100%, 40%)`;
        ctx.shadowColor = `hsl(${contador_intro / 2}, 100%, 40%)`;
        canvas.style.borderColor = `hsl(${contador_intro / 2}, 100%, 40%)`;
        ctx.fillText(sentence, lon, contador_intro -= (contador_intro > 350) ? 10 : (contador_intro > 260) ? 7 : contador_intro > 200 ? 0.5 : 10);
        ctx.restore();
    }

    function intro() {
        ctx.clearRect(0, 0, cW, cH);
        message(`Nivel ${level}`);
        if (contador_intro > -45) introduction = rAnimationFrame(intro);
        else {
            canvas.style.borderColor = `var(--green)`;
            cAnimationFrame(introduction);
            main();
        }
    }

    let introduction = rAnimationFrame(intro);
}

setInterval(() => {
    if (playing) time -= 1;
}, 1000);

const reset = () => {
    end_game = false;
    level = 1;
    contador = 1;
    contador_intro = 600;
    cargando(10);
    score = 0;
    health = 35;
    time = 70;
    bullets = 600;
}

window.addEventListener('keydown', (e) => {
    if (e.key in lista_teclas) lista_teclas[e.key] = true;
})

window.addEventListener('keyup', (e) => {
    if (e.key in lista_teclas) lista_teclas[e.key] = false;
})  

const button_for_play = document.querySelector('.jugar');

button_for_play.addEventListener('click', () => {
    button_for_play.parentElement.removeChild(button_for_play);
    cargando(10);
    canvas.style.background = 'black';
})