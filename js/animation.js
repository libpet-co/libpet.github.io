var id1 = null;
var id2 = null;
window.onload = function () {
    var test = document.getElementById('test_p');
    var robo = document.getElementById("robo1");
    var floor = document.getElementById("wood_floor");
    var grass = document.getElementById("grass_floor");
    var height = floor.clientHeight;
    var height_robo = robo.clientHeight;

    var rect_robo = robo.getBoundingClientRect();
    var rect_floor = floor.getBoundingClientRect();
    var rect_grass = grass.getBoundingClientRect();

    var pos_y1 = rect_robo.top + window.scrollX;
    var pos_y2 = rect_floor.top + window.scrollX;
    var pos_y3 = rect_grass.top + window.scrollY;

    var pos_x1 = rect_robo.left + window.scrollX;
    var pos_x2 = rect_floor.left + window.scrollX;
    var pos_x3 = rect_grass.left + window.scrollX;

    var direction = true;
    const pos_x1_c = pos_x1;
    const pos_y2_c = pos_y2;
    const pos_y1_c = pos_y1;
    clearInterval(id1);
    clearInterval(id2);
    id1 = setInterval(frame1, 10);
    function frame1() {
        if (pos_y1 >= -190 && direction) {
            pos_y1 -= 2.5;
            robo.style.top = pos_y1 + 'px';
        }
        else if (pos_x1 <= pos_x3 && direction) {
            var diff = pos_x3 - pos_x2;
            pos_x1 = pos_x1_c + diff - pos_x2;
            robo.style.left = diff + 'px';
            robo.style.transform = 'rotate(180deg)';
            pos_x1 += pos_x2;
            direction = false;
        }
        else if (pos_y1 <= height && !direction) {
            robo.style.top = pos_y1 + 'px';
            pos_y1 += 2.5;
        }
        else if (pos_x1 >= pos_x3 && !direction) {
            var diff = pos_x3 - pos_x2;
            pos_x1 = pos_x1_c - pos_x2 - 20;
            robo.style.left = pos_x1 + 'px';
            robo.style.transform = 'rotate(0deg)';
            direction = true;
        }
        else {
            clearInterval(frame1, 10);
        }
    }
};