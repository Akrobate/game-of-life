const cellw = 20;
const cellh = 20;
const bordercolor="#ececec";
const nb_x = 60;
const nb_y = 32;

timelaps = 125;
play = false;
grid_elements = null;

game = null;

// Generic methods
const addCls = (_el, _cls) => _el.classList.add(_cls)
const rmCls = (_el, _cls) => _el.classList.remove(_cls)

function $(selector, element = document) {
    const _el = element.querySelectorAll(selector)
    if (_el.length === 1) {
        return _el[0]
    }
    return _el
}


document.addEventListener('DOMContentLoaded', async () => {
    game = new GameOfLife();
    game.nb_x = nb_x
    game.nb_y = nb_y
    initRandomData();
	initRenderGrid();
		
	$(".cell").forEach(element => element.onclick = () => {
		const { x, y } = element.dataset;
		game.data[x][y] ? rmCls(element, 'alive') : addCls(element, 'alive');
		game.data[x][y] = !game.data[x][y];
	});

	$(".act_pause").onclick = () => {
		play = false;
	};
	
	$(".act_play").onclick = () => {
		play = true;
	};
	
	$(".act_init_random").onclick = () => {
		initRandomData();
		fillGridWithData();
	};
	
	$(".act_init_empty").onclick = () => {
		initEmptyData();
		fillGridWithData();
	};

    redraw();
});

function redraw() {
	if (play) {
		game.nextGeneration();
		fillGridWithData();
	}
	setTimeout(() => redraw(), timelaps);
}

function initRandomData() {
    iterateOverData((x, y) => game.data[x][y] = (!(Math.random()+.7|0)));
}

function initEmptyData() {
    iterateOverData((x, y) => game.data[x][y] = false);
}

function initRenderGrid() {
	grd = $("#mainGrid");
	grd.style.width = `${cellw * game.nb_x}px`;
	grd.style.height = `${cellh * game.nb_y}px`;
	
	iterateOverData((x, y) => {
		let alive = game.data[x][y] ? 'alive' : '';
		grd.insertAdjacentHTML(
			'beforeend',
			"<div class='cell "+alive+"' id='x"+x+"y"+y+"' data-x='"+x+"' data-y='"+y+"' style='border:1px solid  "+ bordercolor +";width:" + (cellw -2) +  "px;height:" + (cellh -2) + "px;float:left'></div>"
		);
	});
	
	grd.insertAdjacentHTML('beforeend', '<div style="clear:both"></div>');

	grid_elements = game.initData()
	iterateOverData((x, y) => {
		grid_elements[x][y] = $(`#x${x}y${y}`);
	})
}

function fillGridWithData() {
	iterateOverData((x, y) => {
		game.data[x][y] ? addCls(grid_elements[x][y], 'alive') : rmCls(grid_elements[x][y], 'alive');
	});
}

function iterateOverData(callback) {
    for(let y = 0; y < game.nb_y; y++) {
        for(let x = 0; x < game.nb_x; x++) {
            callback(x, y);
        }
    }
}