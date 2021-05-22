// 导出tab选项卡
export default {
    init() {
        class keyOnu {
            constructor() {
                this.box = document.querySelector(".box");
                console.log(this.box)
                this.input = document.querySelector("input[type=text]");
                console.log(this.input);
                this.keyboard = document.querySelector(".keyboard");
                console.log(this.keyboard)
                this.arr = [];
            }

            myKey() {
                this.keyboard.onclick = (e) => {
                    if (e.target.innerText == "←") {
                        let lengnum = this.input.value.length;
                        let num = this.input.value.substr(0,lengnum-1);
                        this.input.value = num;
                        
                    }else{
                        this.input.value += e.target.innerText;
                    }
                }
            }

            myKeyUp() {
                this.input.onfocus = () => {
                    // console.log(111)
                    this.keyboard.style.bottom = 0 + "px";
                    this.keyboard.style.opacity = 1;
                }
            }

            myKeyDown() {
                this.box.onclick = (e) => {
                    if (e.target.nodeName == "DIV") {
                        console.log(111)                   
                        this.keyboard.style.bottom = -202 + "px";
                        this.keyboard.style.opacity = 0;
                    }
                }
            }

            inint() {
                this.myKey();
                this.myKeyUp();
                this.myKeyDown();
            }
        }
        let keyonu = new keyOnu();
        console.log(keyonu)
        keyonu.inint();
    }
}