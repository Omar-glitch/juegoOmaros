function ostras() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let cW = canvas.width;
    let cH = canvas.height;
    // let bgImage = new Image();
    if (nivel == 1 || nivel == 2 || nivel == 3) {
        var audio = new Audio();
        audio.src = 'ImgPruebas/Bomberman2.mp3';
        audio.autoplay = true;
    } else if (nivel == 4 || nivel == 5 || nivel == 6) {
        var audio = new Audio();
        audio.src = 'ImgPruebas/RatchetGaspar.mp3';
        audio.play();
    } else if (nivel == 7 || nivel == 8) {
        var audio = new Audio();
        audio.src = 'ImgPruebas/RatchetAridia.mp3'
        audio.play()
    } else if (nivel == 9) {
        var audio = new Audio();
        audio.src = 'ImgPruebas/Veldin.mp3'
        audio.play()
    } else if (nivel == 10) {
        var audio = new Audio();
        audio.src = 'ImgPruebas/Time.mp3'
        audio.play()
    }
    // if (nivel == 1 || nivel == 2 || nivel == 3) {
    //     bgImage.src = 'ImgPruebas/Space.jpg';
    // } else if (nivel == 4 || nivel == 5 || nivel == 6) {
    //     bgImage.src = 'ImgPruebas/espacio2.jpg'
    // } else if (nivel == 7 || nivel == 8) {
    //     bgImage.src = 'ImgPruebas/espacio3.jpg'
    // } else if (nivel == 9) {
    //     bgImage.src = 'ImgPruebas/espacio4.jpg'
    // }

    let enemyTemplate = function (datos) {
        return {
            id: datos.id || '',
            x: datos.x || '',
            y: datos.y || '',
            w: datos.w || '',
            h: datos.h || '',
            image: datos.image || imgOvni,
            vida: datos.vida || 3
        }
    }



    if (nivel == 1) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 50,
                w: 50,
                h: 50,
                vida: 1
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 100,
                w: 50,
                h: 50,
                vida: 1
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 150,
                w: 50,
                h: 50,
                vida: 1
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 200,
                w: 50,
                h: 50,
                vida: 1
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 50,
                h: 50,
                vida: 1
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 300,
                w: 50,
                h: 50,
                vida: 1
            })
        ];
    } else if (nivel == 2) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 50,
                w: 50,
                h: 50,
                vida: 2
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 100,
                w: 50,
                h: 50,
                vida: 2
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 150,
                w: 50,
                h: 50,
                vida: 2
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 200,
                w: 50,
                h: 50,
                vida: 2
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 50,
                h: 50,
                vida: 2
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 300,
                w: 50,
                h: 50,
                vida: 2
            })
        ];
    } else if (nivel == 3) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 70,
                w: 60,
                h: 60
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 120,
                w: 60,
                h: 60
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 180,
                w: 60,
                h: 60
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 240,
                w: 60,
                h: 60
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 300,
                w: 60,
                h: 60
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 10,
                w: 60,
                h: 60
            })
        ]
    } else if (nivel == 4) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 100,
                w: 50,
                h: 50,
                vida: 5
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 150,
                w: 50,
                h: 50,
                vida: 5
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 200,
                w: 50,
                h: 50,
                vida: 5
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 50,
                h: 50,
                vida: 5
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 300,
                w: 50,
                h: 50,
                vida: 5
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 350,
                w: 50,
                h: 50,
                vida: 5
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 10,
                w: 50,
                h: 50,
                vida: 5
            })
        ]
    } else if (nivel == 5) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 10,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 70,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 130,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 190,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 310,
                w: 50,
                h: 50,
                vida: 10
            })
        ]
    } else if (nivel == 6) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 10,
                w: 80,
                h: 80,
                vida: 12
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 90,
                w: 80,
                h: 80,
                vida: 12
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 170,
                w: 80,
                h: 80,
                vida: 12
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 80,
                h: 80,
                vida: 12
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 330,
                w: 80,
                h: 80,
                vida: 12
            })
        ]
    } else if (nivel == 7) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 10,
                w: 50,
                h: 50,
                vida: 12
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 60,
                w: 50,
                h: 50,
                vida: 12
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 110,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 160,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 210,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 260,
                w: 50,
                h: 50,
                vida: 10
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 310,
                w: 50,
                h: 50,
                vida: 10
            }),
        ]
    } else if (nivel == 8) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 50,
                w: 50,
                h: 50,
                vida: 7
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 100,
                w: 50,
                h: 50,
                vida: 7
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 150,
                w: 50,
                h: 50,
                vida: 7
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 200,
                w: 50,
                h: 50,
                vida: 7
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 50,
                h: 50,
                vida: 7
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 300,
                w: 50,
                h: 50,
                vida: 7
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 10,
                w: 50,
                h: 50,
                vida: 7
            })
        ];
    } else if (nivel == 9) {
        var enemies = [new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 50,
                w: 50,
                h: 50,
                vida: 35
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 100,
                w: 50,
                h: 50,
                vida: 35
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 150,
                w: 50,
                h: 50,
                vida: 35
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 200,
                w: 50,
                h: 50,
                vida: 35
            }),
            new enemyTemplate({
                id: 'Enemigo1',
                x: Math.floor((Math.random() * 600) + 1),
                y: 250,
                w: 50,
                h: 50,
                vida: 35
            })
        ];
    } else if (nivel == 10) {
        var enemies = [new enemyTemplate({
            id: 'Enemigo1',
            x: Math.floor((Math.random() * 600) + 1),
            y: 10,
            w: 200,
            h: 200,
            vida: 1500
        })];
    }


    var renderEnemies = function (lista) {
        for (i = 0; i < lista.length; i++) {
            enemy = lista[i];
            dalas = lista.length;
            d = enemy;
            // launcher.bot.push({
            //     x: enemy.x,
            //     y: enemy.y,
            //     w: enemy.w,
            //     h: enemy.h
            // })
            // launcher.naveChoque(enemy, i);   

            if (nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 5 || nivel == 6) {
                if (enemy.valora == undefined) {
                    ctx.drawImage(imgOvni, enemy.x += 7, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == true) {
                    ctx.drawImage(imgOvni, enemy.x -= 7, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == false) {
                    ctx.drawImage(imgOvni, enemy.x += 7, enemy.y, enemy.w, enemy.h)
                }
            } else if (nivel == 7) {
                if (enemy.valora == undefined) {
                    ctx.drawImage(imgOvni, enemy.x += 10, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == true) {
                    ctx.drawImage(imgOvni, enemy.x -= 10, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == false) {
                    ctx.drawImage(imgOvni, enemy.x += 10, enemy.y, enemy.w, enemy.h)
                }
            } else if (nivel == 8) {
                if (enemy.valora == undefined) {
                    ctx.drawImage(imgOvni, enemy.x += 12, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == true) {
                    ctx.drawImage(imgOvni, enemy.x -= 12, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == false) {
                    ctx.drawImage(imgOvni, enemy.x += 12, enemy.y, enemy.w, enemy.h)
                }
            } else if (nivel == 9) {
                if (enemy.valora == undefined) {
                    ctx.drawImage(imgOvni, enemy.x += 8, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == true) {
                    ctx.drawImage(imgOvni, enemy.x -= 8, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == false) {
                    ctx.drawImage(imgOvni, enemy.x += 8, enemy.y, enemy.w, enemy.h)
                }
            } else if (nivel == 10) {
                if (enemy.valora == undefined) {
                    ctx.drawImage(imgOvni, enemy.x += 8, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == true) {
                    ctx.drawImage(imgOvni, enemy.x -= 8, enemy.y, enemy.w, enemy.h)
                } else if (enemy.valora == false) {
                    ctx.drawImage(imgOvni, enemy.x += 8, enemy.y, enemy.w, enemy.h)
                }
            }

            launcher.enemigoChoque(enemy, i);

            if (nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 5 || nivel == 7 || nivel == 8 || nivel == 9) {
                if (enemy.x > cW - 50) {
                    enemy.valora = true;
                } else if (enemy.x < cW - cW) {
                    enemy.valora = false;
                }
            } else if (nivel == 6) {
                if (enemy.x > cW - 80) {
                    enemy.valora = true;
                } else if (enemy.x < cW - cW) {
                    enemy.valora = false;
                }
            } else if (nivel == 10) {
                if (enemy.x > cW - 200) {
                    enemy.valora = true;
                } else if (enemy.x < cW - cW) {
                    enemy.valora = false;
                }
            }
            if (nivel == 1) {
                if (Math.floor(Math.random() * 100) == 5) {
                    balasEnemigas(enemy);
                }
            } else if (nivel == 2) {
                if (Math.floor(Math.random() * 60) == 5) {
                    balasEnemigas(enemy);
                }
            } else if (nivel == 3) {
                if (Math.floor(Math.random() * 40) == 5) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 4) {
                if (Math.floor(Math.random() * 30) == 5) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 5) {
                if (Math.floor(Math.random() * 70) == 17) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 6) {
                if (Math.floor(Math.random() * 80) == 17) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 7) {
                if (Math.floor(Math.random() * 60) == 17) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 8) {
                if (Math.floor(Math.random() * 80) == 17) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 9) {
                if (Math.floor(Math.random() * 20) == 17) {
                    balasEnemigas(enemy)
                }
            } else if (nivel == 10) {
                if (Math.floor(Math.random() * 50) == 17) {
                    balasEnemigas(enemy)
                }
            }
        }
    }

    function balasEnemigas(h) {
        if (nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4 || nivel == 7 || nivel == 9) {
            launcher.misilesEnemigos.push({
                x: h.x + 30,
                y: h.y + 40,
                w: 7,
                h: 12
            })
        } else if (nivel == 5) {
            launcher.misilesEnemigos.push({
                x: h.x + 30,
                y: h.y + 40,
                w: 7,
                h: 12,
                a: h.x + 30,
                b: h.y + 40
            })
        } else if (nivel == 6) {
            launcher.misilesEnemigos.push({
                x: h.x,
                y: h.y + 40,
                w: 7,
                h: 12,
                a: h.x + h.w,
                b: h.y + 40
            })
        } else if (nivel == 8 || nivel == 10) {
            launcher.misilesEnemigos.push({
                x: h.x,
                y: h.y + 40,
                w: 7,
                h: 12,
                a: h.x + h.w,
                b: h.y + 40,
                c: h.x + 28,
                d: h.y + 40
            })
        }


    }

    var noEnemigos = setInterval(() => {
        if (enemies.length == 0) {
            GameOver();
            clearInterval(noEnemigos);
            clearInterval(animateInterval);
            clearInterval(imagenBucle)
        }
    }, 1200);

    function launcher() {
        this.y = 500,
            this.x = cW / 2 - 25,
            this.w = 100,
            this.h = 100,
            this.direccion,
            this.bg = 'skyblue',
            this.misiles = [];
        this.misilesEnemigos = [];
        this.yeti = false;
        this.yBg = 0;
        this.numOndas = [];
        this.wtf = [];



        // this.bot = [];


        this.render = function () {
            if (teclita[teclaDerecha] || nombre2) {
                if (vel) {
                    this.x += +8;
                    if (this.x > cW - 50) {
                        this.x -= 8;
                    }
                } else {
                    this.x += +4;
                    if (this.x > cW - 50) {
                        this.x -= 4;
                    }
                }
            }
            if (teclita[teclaIzquierda] || nombre4) {
                if (vel) {
                    this.x += -8;
                    if (cW - 700 > this.x) {
                        this.x += +8;
                    }
                } else {
                    this.x += -4;
                    if (cW - 700 > this.x) {
                        this.x += +4;
                    }
                }
            }
            if (teclita[teclaAbajo] || nombre3) {
                if (vel) {
                    this.y += +8;
                    if (this.y > cH - 50) {
                        this.y += -8;
                    }
                } else {
                    this.y += +4;
                    if (this.y > cH - 50) {
                        this.y += -4;
                    }
                }
            }
            if (teclita[teclaArriba] || nombre) {
                if (vel) {
                    this.y += -8;
                    if (cH - 600 > this.y) {
                        this.y += +4;
                    }
                } else {
                    this.y += -4;
                    if (cH - 600 > this.y) {
                        this.y += +4;
                    }
                }
            }
            if (teclita[teclaEspacio] || amm) {
                if (tiempoBala == true) {
                    if (balaRapida){
                        tiempoBala = true;
                    }else{
                        tiempoBala = false;
                    }
                    balitas -= 1;
                    bals.innerHTML = balitas;
                    var audio2 = new Audio();
                    audio2.src = 'ImgPruebas/LaserModificado.m4a';
                    audio2.play();

                    launcher.misiles.push({
                        x: launcher.x + 22,
                        y: launcher.y,
                        w: 5,
                        h: 10
                    });
                    setTimeout(() => {
                        tiempoBala = true;
                    }, 300);
                }
            }
            if (nivel >= 5) {

                ostiaehchaval += 1;
                if (ostiaehchaval == 50) {
                    this.wtf.push({
                        x: this.x + cW,
                        y: this.y - 50,
                        a: this.x - 15,
                        b: this.y - 15
                    })
                }
                if (nivel == 5 && ostiaehchaval > 500) {
                    ostiaehchaval = 0;
                } else if (nivel == 6 && ostiaehchaval > 400) {
                    ostiaehchaval = 0;
                } else if (nivel == 7 && ostiaehchaval > 300) {
                    ostiaehchaval = 0;
                } else if (nivel == 8 && ostiaehchaval > 200) {
                    ostiaehchaval = 0;
                } else if (nivel == 9 && ostiaehchaval > 100) {
                    ostiaehchaval = 0;
                }
            }
            ctx.fillStyle = this.bg;
            if (nivel == 1) {
                ctx.drawImage(bgImage, 0, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 2) {
                ctx.drawImage(bgImage, -500, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 3) {
                ctx.drawImage(bgImage, -1000, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 4) {
                ctx.drawImage(bgImage, 0, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 5) {
                ctx.drawImage(bgImage, -500, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 6) {
                ctx.drawImage(bgImage, -1000, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 7) {
                ctx.drawImage(bgImage, 0, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 8) {
                ctx.drawImage(bgImage, -500, this.yBg -= 0.25, 3000, 3000)
            } else if (nivel == 9) {
                ctx.drawImage(bgImage, 0, this.yBg -= 0.25, 3000, 3000)
            }
            ctx.drawImage(imgNave, this.x, this.y, 50, 50)

            // Creacion de misiles
            for (let i = 0; i < this.misiles.length; i++) {
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y -= 12, m.w, m.h);
                this.hitDetect(m, i);
                if (m.y <= 0) {
                    this.misiles.splice(i, 1);
                }
            }
            for (let i = 0; i < this.misilesEnemigos.length; i++) {
                var w = this.misilesEnemigos[i];
                if (nivel == 1) {
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(w.x, w.y += 6, w.w, w.h);
                } else if (nivel == 2) {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(w.x, w.y += 5, w.w, w.h);
                } else if (nivel == 3) {
                    ctx.drawImage(imagendeunabala, w.x, w.y += 6, 30, 30)
                } else if (nivel == 4) {
                    ctx.drawImage(imagendeunabala, w.x, w.y += 6, 30, 30)
                } else if (nivel == 5) {
                    ctx.drawImage(imagendeunabalita, w.x += 3, w.y += 3, 20, 20)
                    ctx.drawImage(imagendeunabala, w.a -= 3, w.b += 3, 20, 20)
                } else if (nivel == 6) {
                    ctx.drawImage(imagendeunabala, w.x, w.y += 6, 25, 25)
                    ctx.drawImage(imagendeunabala, w.a, w.b += 6, 25, 25)
                } else if (nivel == 7) {
                    ctx.fillStyle = 'blue';
                    ctx.fillRect(w.x, w.y += 12, w.w, w.h);
                } else if (nivel == 8 || nivel == 10) {
                    ctx.drawImage(imagendeunbalon, w.x += 4, w.y += 6, 20, 20)
                    ctx.drawImage(imagendeunabalita, w.a -= 4, w.b += 6, 20, 20)
                    ctx.drawImage(imagendeunabala, w.c, w.d += 6, 20, 20)
                } else if (nivel == 9) {
                    ctx.drawImage(imagendeunabala, w.x, w.y += 6, 20, 20)
                    if (this.x + 8 < w.x) {
                        w.x -= 3;
                    } else if (this.x + 14 > w.x) {
                        w.x += 3;
                    }
                }
                this.hitDetectR(w, i);
                if (w.y >= 600) {
                    this.misilesEnemigos.splice(i, 1);
                }
            }
            for (let i = 0; i < this.numOndas.length; i++) {
                var danticliterios = this.numOndas[i];
                ctx.save()
                ctx.beginPath()
                ctx.strokeStyle = danticliterios.c;
                ctx.arc(danticliterios.x, danticliterios.y, danticliterios.r += 20, 0, 2 * Math.PI)
                ctx.stroke()
                if (danticliterios.r >= 500) {
                    this.numOndas.splice(i, 1);
                }
                ctx.restore()
            }
            for (let i = 0; i < this.wtf.length; i++) {
                var antiwtf = this.wtf[i];
                ctx.drawImage(tarjet, antiwtf.a, antiwtf.b, 80, 60);
                ctx.drawImage(navewtf, antiwtf.x -= 10, antiwtf.y += 0.5, 60, 60);
                if (antiwtf.x < cW - cW - 20 || antiwtf.y > cH) {
                    this.wtf.splice(i, 1);
                }
                this.hitDetectRR(antiwtf, i);
            }
        }
        this.hitDetect = function (m, mi) {
            for (let g = 0; g < enemies.length; g++) {
                let e = enemies[g];
                if ((m.x > e.x) &&
                    (m.x < e.x + e.w) &&
                    (m.y > e.y) &&
                    (m.y < e.y + e.w)) {
                    this.yeti = true;
                    paco = false;
                    figura = e;

                    e.vida -= 1;
                    if (e.vida <= 0) {
                        enemies.splice(g, 1);
                        texto1.style.animation = 'grand .3s';
                        // var explosion = new Audio();
                        // explosion.src = 'ImgPruebas/Explosion.mp3'
                        // explosion.play()
                        if (nivel == 1) {
                            puntaje += 5;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 2) {
                            puntaje += 10;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 3) {
                            puntaje += 20;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 4) {
                            puntaje += 50;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 5) {
                            puntaje += 100;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 6) {
                            puntaje += 200;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 7) {
                            puntaje += 350;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 8) {
                            puntaje += 500;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 9) {
                            puntaje += 750;
                            puntos.innerHTML = puntaje;
                        } else if (nivel == 10) {
                            puntaje += 1000;
                            puntos.innerHTML = puntaje;
                        }
                    }


                    this.misiles.splice(mi, 1)
                }
            }
        }
        this.hitDetectR = function (mE, mis) {
            if ((mE.x > this.x - 7) &&
                (mE.x < this.x + 50 - 2) &&
                (mE.y > this.y) &&
                (mE.y < this.y + 50 - 5) || ((mE.a > this.x - 7) &&
                    (mE.a < this.x + 50 - 2) &&
                    (mE.b > this.y + 5) &&
                    (mE.b < this.y + 50 - 5)) || ((mE.c > this.x - 7) &&
                    (mE.c < this.x + 50 - 2) &&
                    (mE.d > this.y + 5) &&
                    (mE.d < this.y + 50 - 5))) {
                this.misilesEnemigos.splice(0, 30);
                pan = true;
                if (pan) {
                    health = health - 1;
                    vidas.innerHTML = health;
                    pan = false;
                    if (health > 0) {
                        this.numOndas.push({
                            x: this.x + 5,
                            y: this.y + 50,
                            r: 50,
                            c: 'white'
                        })
                    }
                }

            }
            if (health <= 0) {
                GameOver();
                clearInterval(noEnemigos);
                clearInterval(animateInterval);
                clearInterval(imagenBucle)
            }
        }
        this.hitDetectRR = function (wf, i) {
            if ((wf.x > this.x - 40) && (wf.x < this.x + 40) && (wf.y + 40 > this.y) && (wf.y < this.y + 40)) {
                this.wtf.splice(i, 1);
                var explision = new Audio();
                explision.src = 'ImgPruebas/Explosion.mp3';
                explision.play();
                health -= 3;
                vidas.innerHTML = health;
                this.numOndas.push({
                    x: wf.x,
                    y: wf.y,
                    r: 50,
                    c: 'red'
                })
                
            }
        }
        this.enemigoChoque = function (e, i) {
            if ((e.x > this.x - 40) &&
                (e.x < this.x + 40) &&
                (e.y + 50 > this.y) &&
                (e.y < this.y + 40)) {
                enemies.splice(i, 1);
                health -= 5;
                vidas.innerHTML = health;
                this.numOndas.push({
                    x: this.x + 5,
                    y: this.y + 50,
                    r: 50,
                    c: 'white'
                })
            }
        }
    }

    var launcher = new launcher();

    function fuego(e) {
        ctx.beginPath()
        ctx.fillStyle = 'red';
        ctx.arc(e.x + 25, e.y + 25, 25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke()
        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = 'bold 32px Arial';
        ctx.fillText(e.vida, e.x + 16, e.y + 35)
        ctx.restore()

        aleatorio += 1;
        if (aleatorio == 5) {
            launcher.yeti = false;
            aleatorio = 0;
        }
    }

    function vaguito() {
        vago += 1;
        if (vago == 15) {
            texto1.style.animation = '';
            vago = 0;
            paco = true;
        }
    }

    function cajita() {
        var infogame = document.querySelector('.info-game');
        if ((balitas <= 5) && (time <= 10) && (health <= 1)) {
            bals.style.color = 'red';
            tiempo.style.color = 'red';
            vidas.style.color = 'red';
            infogame.style.border = '5px solid red'
        } else if ((balitas <= 5) && (time <= 10)) {
            bals.style.color = 'red';
            tiempo.style.color = 'red';
            vidas.style.color = 'yellowgreen';
            infogame.style.border = '5px solid red'
        } else if ((balitas <= 5) && (health <= 1)) {
            bals.style.color = 'red';
            vidas.style.color = 'red';
            tiempo.style.color = 'yellowgreen';
            infogame.style.border = '5px solid red'
        } else if ((time <= 10) && (health <= 1)) {
            bals.style.color = 'yellowgreen';
            tiempo.style.color = 'red';
            vidas.style.color = 'red';
            infogame.style.border = '5px solid red'
        } else if (balitas <= 5) {
            bals.style.color = 'red';
            tiempo.style.color = 'yellowgreen';
            vidas.style.color = 'yellowgreen';
            infogame.style.border = '5px solid red'
        } else if (time <= 10) {
            bals.style.color = 'yellowgreen';
            vidas.style.color = 'yellowgreen';
            tiempo.style.color = 'red';
            infogame.style.border = '5px solid red'
        } else if (health <= 1) {
            bals.style.color = 'yellowgreen';
            tiempo.style.color = 'yellowgreen';
            vidas.style.color = 'red';
            infogame.style.border = '5px solid red'
        } else {
            bals.style.color = 'yellowgreen';
            tiempo.style.color = 'yellowgreen';
            vidas.style.color = 'yellowgreen';
            infogame.style.border = '5px solid yellowgreen'
        }
    }

    function vidass() {
        nuevaVida += 1;
        this.x = random;
        this.y = 500;
        this.w = 30;
        this.h = 30;
        this.valor = false;
        if (nuevaVida > 500) {

            this.valor = true;
            ctx.drawImage(imgVida, this.x, this.y, this.w, this.h);
        } else if (nuevaVida > 1500) {
            nuevaVida = 0;
            baba();
        }
        if (nuevaVida > 450){
            vel = false;
            balaRapida = false;
        }
        if ((launcher.x > this.x - 50) &&
            (launcher.x < this.x + this.w) &&
            (launcher.y > this.y - 50) &&
            (launcher.y < this.y + this.w) && (this.valor)) {
            nuevaVida = 0;
            if (item == 0) {
                health += 1;
                vidas.innerHTML = health;
                var sonidoItem = new Audio();
                sonidoItem.src = 'ImgPruebas/VidaExtra.mp3';
                sonidoItem.play()
            } else if (item == 1) {
                time += 15;
                tiempo.innerHTML = time;
                var sonidoItem = new Audio();
                sonidoItem.src = 'ImgPruebas/Tiempo.mp3';
                sonidoItem.play()
            } else if (item == 2) {
                balitas += 12;
                bals.innerHTML = balitas;
                var sonidoItem = new Audio();
                sonidoItem.src = 'ImgPruebas/BalasSonido.mp3';
                sonidoItem.play()
            } else if (item == 3) {
                vel = true;
                var sonidoItem = new Audio();
                sonidoItem.src = 'ImgPruebas/velocidad.mp3';
                sonidoItem.play()
            } else if (item == 4) {
                balaRapida = true;
                var sonidoItem = new Audio();
                sonidoItem.src = 'ImgPruebas/BalasAnti.mp3';
                sonidoItem.play()
            }

            vidas.innerHTML = health;
            this.valor = false;
            baba()
        }
    }



    function animate() {
        if (endGame == false) {
            tiempoverdadero = true;
            ctx.clearRect(0, 0, cW, cH);
            launcher.render();
            renderEnemies(enemies);
            cajita();
            // launcher.onda()
            vidass();
            if (balitas <= 0) {
                GameOver();
                clearInterval(noEnemigos);
                clearInterval(animateInterval);
                clearInterval(imagenBucle)
            }
            if (time <= 0) {
                GameOver();
                clearInterval(noEnemigos);
                clearInterval(animateInterval);
                clearInterval(imagenBucle)
            }
            if (health <= 0) {
                GameOver();
                clearInterval(noEnemigos);
                clearInterval(animateInterval);
                clearInterval(imagenBucle)
            }
            if (launcher.yeti) {
                fuego(figura)
            }
            if (!paco) {
                vaguito()
            }
        }
    }

    function GameOver() {
        endGame = true;
        tiempoverdadero = false;
        launcher.numOndas = [];

        ctx.clearRect(0, 0, cW, cH);
        if (enemies.length > 0 && balitas > 0 && tiempo > 0 && health > 0) {
            mensaje('Manco :v')
            enemies = [];
            launcher.misiles = [];
            launcher.misilesEnemigos = [];
        } else if (balitas <= 0) {
            mensaje('No hay balas')
            enemies = [];
            launcher.misiles = [];
            launcher.misilesEnemigos = [];
        } else if (time <= 0) {
            mensaje('Tiempo agotado')
            enemies = [];
            launcher.misiles = [];
            launcher.misilesEnemigos = [];
        } else if (health <= 0) {
            mensaje('Haz muerto :v')
            vidas.innerHTML = 0;
            enemies = [];
            launcher.misiles = [];
            launcher.misilesEnemigos = [];
        } else {
            cajaIzq()
            helio = 600;
            ostras2();
            nivel += 1;
            balitas += 20;
            bals.innerHTML = balitas;
            time += 20;
            tiempo.innerHTML = time;
            health += 1;
            vidas.innerHTML = health;
            puntaje += 200;
            puntos.innerHTML = puntaje;
            endGame = false;
            back();
            if (nivel > 1) {
                clearInterval(imagenBucle);
            }
            var imagenBucle = setInterval(() => {
                imagen()
            }, 500);
            imagendeunapequeñabala();
            setTimeout(() => {
                ostras()
            }, 4000);
        }


        audio.pause()

    }


    function mensaje(cadena) {
        var lon = (cW - (40 * cadena.length)) / 2;
        ctx.fillStyle = "white";
        ctx.clearRect(0, 0, cW, cH);
        ctx.font = "bold 75px Arial";
        ctx.fillText(cadena, lon, 220);
    }
    var animateInterval = setInterval(animate, 20);
}

// Hasta aqui llega la funcion ostras

function ostras2() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let cW = canvas.width;
    let cH = canvas.height;

    audioIntro.play()

    // mensaje('Nivel 1');

    function mensaje(cadena) {
        // var helio = 600; 

        var lon = (cW - (32 * cadena.length)) / 2;


        if (helio >= 350) {
            ctx.fillStyle = "green";
            ctx.clearRect(0, 0, cW, cH);
            ctx.font = "bold 75px Arial";
            ctx.fillText(cadena, lon, helio -= 10);

        } else if (helio >= 260) {
            ctx.fillStyle = "blue";
            ctx.clearRect(0, 0, cW, cH);
            ctx.font = "bold 75px Arial";
            ctx.fillText(cadena, lon, helio -= 7);

        } else if (helio >= 200) {
            ctx.fillStyle = "magenta";
            ctx.clearRect(0, 0, cW, cH);
            ctx.font = "bold 85px Arial";
            ctx.fillText(cadena, 220, helio -= 0.5);

        } else if (helio >= -50) {
            ctx.fillStyle = "red";
            ctx.clearRect(0, 0, cW, cH);
            ctx.font = "bold 75px Arial";
            ctx.fillText(cadena, lon, helio -= 10);
        }
    }

    function holaBuenas() {
        ctx.clearRect(0, 0, cW, cH);

        if (nivel == 1) {
            mensaje('Nivel 1');
        } else if (nivel == 2) {
            mensaje('Nivel 2');
        } else if (nivel == 3) {
            mensaje('Nivel 3');
        } else if (nivel == 4) {
            mensaje('Nivel 4')
        } else if (nivel == 5) {
            mensaje('Nivel 5')
        } else if (nivel == 6) {
            mensaje('Nivel 6')
        } else if (nivel == 7) {
            mensaje('Nivel 7')
        } else if (nivel == 8) {
            mensaje('Nivel 8')
        } else if (nivel == 9) {
            mensaje('Nivel 9')
        } else if (nivel == 10) {
            mensaje('Nivel 10')
        }

        if (helio <= -25) {
            clearInterval(holaBuenasNoches);
        }
    }

    var holaBuenasNoches = setInterval(holaBuenas, 20);

}



var tecla = null;
var teclita = [];
var teclaEspacio = 32;
var teclaArriba = 38;
var teclaAbajo = 40;
var teclaDerecha = 39;
var teclaIzquierda = 37;
var tiempoBala = true;
var balas = new Array();
var patata = true;
var endGame = false;
var nivel = 1;
var helio = 600;
let imgNave = new Image();
let imgOvni = new Image();
var yeti = false;
var hola = false;
var figura = null;
var aleatorio = 0;
var puntaje = 0;
var health = 35;
var time = 70;
var pan = false;
var balitas = 600;
var tiempoverdadero = false;
var puntos = document.querySelector('#puntos');
var tiempo = document.querySelector('#tiempo');
var vidas = document.querySelector('#vida');
var bals = document.querySelector('#balas');
var texto1 = document.querySelector('.info-game .game div:nth-child(1) .hello p');
var vago = 0;
var paco = true;
var nuevaVida = 0;
var random = null;
var imgVida = new Image();
var item = null;
imgVida.src = 'ImgPruebas/vida.png';
var imagendeunabala = new Image();
var imagendeunabalita = new Image();
var imagendeunbalon = new Image();
let audioIntro = new Audio;
audioIntro.src = 'ImgPruebas/Start.mp3';
var up = document.querySelector('.controles-no .flechitas-si:nth-child(2)');
var right = document.querySelector('.controles-no .flechitas-si:nth-child(6)');
var left = document.querySelector('.controles-no .flechitas-si:nth-child(4)');
var down = document.querySelector('.controles-no .flechitas-si:nth-child(5)');
var ammo = document.querySelector('.no');
var nombre = false;
var nombre2 = false;
var nombre3 = false;
var nombre4 = false;
var amm = false;
var cajaPuntos = document.querySelector('.maspuntos');
var ostiaehchaval = 0;
var navewtf = new Image();
navewtf.src = 'ImgPruebas/peonless.png';
var tarjet = new Image();
tarjet.src = 'ImgPruebas/tarjet.png'
var vel = false;
var balaRapida = false;
var folagor = document.querySelector('#canvas');
var bgImage = new Image();

function back(){
    if (nivel == 1 || nivel == 2 || nivel == 3) {
        bgImage.src = 'ImgPruebas/Space.jpg';
    } else if (nivel == 4 || nivel == 5 || nivel == 6) {
        bgImage.src = 'ImgPruebas/espacio2.jpg'
    } else if (nivel == 7 || nivel == 8) {
        bgImage.src = 'ImgPruebas/espacio3.jpg'
    } else if (nivel == 9) {
        bgImage.src = 'ImgPruebas/espacio4.jpg'
    }
}

function cajaIzq() {
    cajaPuntos.style.right = '15px';
    setTimeout(cajaDer, 3000)
}

function cajaDer() {
    cajaPuntos.style.right = '-300px';
}

function imagendeunapequeñabala() {
    if (nivel == 3) {
        imagendeunabala.src = 'ImgPruebas/Bala3.png';
    } else if (nivel == 4) {
        imagendeunabala.src = 'ImgPruebas/Bala4.png';
    } else if (nivel == 5) {
        imagendeunabala.src = 'ImgPruebas/Bala5.png';
        imagendeunabalita.src = 'ImgPruebas/Bala5_2.png'
    } else if (nivel == 6) {
        imagendeunabala.src = 'ImgPruebas/Bala6.png';
    } else if (nivel == 8) {
        imagendeunabala.src = 'ImgPruebas/Bala8_1_1.png';
        imagendeunabalita.src = 'ImgPruebas/Bala8_2_1.png';
        imagendeunbalon.src = 'ImgPruebas/Bala8_3_1.png';
    } else if (nivel == 9) {
        imagendeunabala.src = 'ImgPruebas/Bala9.png'
    }
}

vidas.innerHTML = health;
bals.innerHTML = balitas;
puntos.innerHTML = puntaje;
tiempo.innerHTML = time;

setInterval(() => {
    if (tiempoverdadero) {
        time -= 1;
        tiempo.innerHTML = time;
    }
}, 1000);

function baba() {
    // sonidoItem.src = '';
    random = Math.floor(Math.random() * 600);
    item = Math.floor(Math.random() * 5);
    if (item == 0) {
        imgVida.src = 'ImgPruebas/vida.png';
    } else if (item == 1) {
        imgVida.src = 'ImgPruebas/NuevoReloj.png';
    } else if (item == 2) {
        imgVida.src = 'ImgPruebas/balitasxd.png';
    } else if (item == 3) {
        imgVida.src = 'ImgPruebas/Velocidadsi.png';
    } else if (item == 4) {
        imgVida.src = 'ImgPruebas/superbalitas.jpg'
    }
    // console.log(item)
}

function imagen() {
    if (nivel == 1) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo1_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo1_2.png';
            patata = true;
        }
    } else if (nivel == 2) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo2_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo2_2.png';
            patata = true;
        }
    } else if (nivel == 3) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo3_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo3_2.png';
            patata = true;
        }
    } else if (nivel == 4) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo4_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo4_2.png';
            patata = true;
        }
    } else if (nivel == 5) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo5_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo5_2.png';
            patata = true;
        }
    } else if (nivel == 6) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo6_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo6_2.png';
            patata = true;
        }
    } else if (nivel == 7) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo7_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo7_2.png';
            patata = true;
        }
    } else if (nivel == 8) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo8_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo8_2.png';
            patata = true;
        }
    } else if (nivel == 9) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo9_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo9_2.png';
            patata = true;
        }
    } else if (nivel == 10) {
        if (patata) {
            imgNave.src = 'ImgPruebas/piloto1.png';
            imgOvni.src = 'ImgPruebas/Enemigo9_1.png';
            patata = false;

        } else {
            imgNave.src = 'ImgPruebas/piloto2.png';
            imgOvni.src = 'ImgPruebas/Enemigo9_2.png';
            patata = true;
        }
    }
}

var imagenBucle = setInterval(() => {
    imagen()
}, 500);

window.addEventListener('keydown', (e) => {
    tecla = e.keyCode;
    teclita[e.keyCode] = true;
})
window.addEventListener('keypress', (e) => {
    teclita[e.keyCode] = true;
})
window.addEventListener('keyup', (e) => {
    teclita[e.keyCode] = false;
})

up.addEventListener('touchstart', function () {
    nombre = true;
})
up.addEventListener('touchend', function () {
    nombre = false;
})
right.addEventListener('touchstart', function () {
    nombre2 = true;

})
right.addEventListener('touchend', function () {
    nombre2 = false;
})
left.addEventListener('touchstart', function () {
    nombre4 = true;

})
left.addEventListener('touchend', function () {
    nombre4 = false;
})
down.addEventListener('touchstart', function () {
    nombre3 = true;

})
down.addEventListener('touchend', function () {
    nombre3 = false;
})
ammo.addEventListener('touchstart', function () {
    amm = true;

})
ammo.addEventListener('touchend', function () {
    amm = false;
})
var jugar = document.querySelector('#hola');
jugar.addEventListener('click', () => {
    jugar.style.opacity = 0;
    jugar.style.visibility = 'hidden';
    ostras2();
    baba();
    back();
    imagendeunapequeñabala()
    setTimeout(ostras, 4000)
    folagor.style.background = 'black';
})
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector(".contenedor-loader");
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = "hidden";
})