const { ref } = Vue;

const app = {
    data() {
        return {
            areas: [
                { 
                    name: '#1 Tower',
                    x: 648,
                    y: 659,
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t1.jpg',
                    position: 'Top right'
                },
                { 
                    name: '#2 Tower',
                    x: 648, 
                    y: 668, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t2.jpg',
                    position: 'Right'
                },
                { 
                    name: '#3 Tower',
                    x: 645, 
                    y: 677, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t3.jpg',
                    position: 'Center'
                },
                { 
                    name: '#4 Tower',
                    x: 643, 
                    y: 686, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t4.jpg',
                    position: 'Top right'
                },
                { 
                    name: '#5 Tower',
                    x: 641, 
                    y: 695, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t5.jpg',
                    position: 'Top right'
                },
                { 
                    name: '#6 Tower',
                    x: 637, 
                    y: 704, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t6.jpg',
                    position: 'Bottom'
                },
                { 
                    name: '#7 Tower',
                    x: 636, 
                    y: 713, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t7.jpg',
                    position: 'Top right'
                },
                { 
                    name: '#8 Tower',
                    x: 634, 
                    y: 722, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t8.jpg',
                    position: 'Top left'
                },
                { 
                    name: '#9 Tower',
                    x: 625, 
                    y: 729, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t9.jpg',
                    position: 'Bottom right'
                },
                { 
                    name: '#10 Tower',
                    x: 616, 
                    y: 736, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t10.jpg',
                    position: 'Top right'
                },
                { 
                    name: '#11 Tower',
                    x: 609, 
                    y: 745, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t11.jpg',
                    position: 'Center'
                },
                { 
                    name: '#12 Tower',
                    x: 605, 
                    y: 754, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t12.jpg',
                    position: 'Center'
                },
                { 
                    name: '#13 Tower',
                    x: 598, 
                    y: 761, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t13.jpg',
                    position: 'Top right'
                },
                { 
                    name: '#14 Tower',
                    x: 591, 
                    y: 761, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t14.jpg',
                    position: 'Bottom right'
                },
                { 
                    name: '#15 Tower',
                    x: 585, 
                    y: 769, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t15.jpg',
                    position: 'Top'
                },
                { 
                    name: '#16 Tower',
                    x: 582, 
                    y: 778, 
                    len: 10, 
                    color: 'rgba(255,0,0,0.2)', 
                    image: 'images/t16.jpg',
                    position: 'Center'
                },
                { 
                    name: '#14 Alliance Fort',
                    x: 591, 
                    y: 758, 
                    len: 14, 
                    color: 'rgba(163,73,164,0.2)', 
                    image: 'images/f14.jpg',
                    position: 'Top right'
                }
            ],
            activeArea: null,
            mouseX: 0,
            mouseY: 0,
            cardX: 0,
            cardY: 0,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
    },
    mounted() {
        window.addEventListener('resize', this.updateWindowSize);
    },
    methods: {
        showCard(area, event) {
            this.activeArea = area;
            this.moveCard(event);
        },
        moveCard(event) {
            const mouseX = event.pageX;
            const mouseY = event.pageY;
            const cardWidth = 1000;
            const cardHeight = 0.6 * cardWidth;

            if (mouseX + cardWidth > this.windowWidth) {
                this.cardX = mouseX - cardWidth - 10;
            } else {
                this.cardX = mouseX + 10;
            }

            if (mouseY + cardHeight > this.windowHeight) {
                this.cardY = mouseY - cardHeight - 10;
            } else {
                this.cardY = mouseY + 10;
            }
            //this.cardX = event.clientX + 10;
            //this.cardY = event.clientY + 10;
        },
        updateWindowSize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        },
        hideCard() {
            this.activeArea = null;
        },
        calcX(x, y) {
            return 11.8903357 * x - 0.6793055 * y - 5320.9799565;
        },
        calcY(x, y) {
            return 0.93010340 * x - 6.9335504 * y + 5190.7229031;
        },
        calcXLen(len, x, y) {
            return Math.abs(this.calcX(x + len / 2, y) - this.calcX(x - len / 2, y));
        },
        calcYLen(len, x, y) {
            return Math.abs(this.calcY(x, y - len / 2) - this.calcY(x, y + len / 2));
        },
        opaqueColorStyle(color) {
          const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);
          if (match) {
            return `rgba(${match[1]}, ${match[2]}, ${match[3]}, 1)`
          }
          return { color: color };
        }
    }
};

Vue.createApp(app).mount('#app');