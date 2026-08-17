class GameOfLife {

    nb_x = 60;
    nb_y = 32;
    data = null;

    constructor(){
        this.data = this.initData();
    }

    initData() {
        return Array.from({ length: this.nb_x }, () => new Array(this.nb_y).fill(false));
    }

    nextGeneration() {
        let next_data = this.initData();
        for(let y = 0; y < this.nb_y; y++) {
            for(let x = 0; x < this.nb_x; x++) {
                let counton = this.countArround(this.data, x, y);
                if (this.data[x][y]) {	
                    next_data[x][y] = (counton != 2) && (counton != 3) ? false : true
                } else {
                    next_data[x][y] = (counton == 3)
                }
            }
        }
        this.data = next_data;
    }

    countArround(data, x, y) {			
        let count = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (
                    (data[x+i] !== undefined)
                    && (data[x+i][y+j] !== undefined)
                    && (! ((i == 0) && (j == 0)))
                    && (data[x+i][y+j])
                ) {
                    count++;
                }
            }
        }
        return count;
    }

};
