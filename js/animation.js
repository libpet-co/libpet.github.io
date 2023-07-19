// var id1 = null;
// var id2 = null;

// window.onload = function () {
//     var robo = document.getElementById("robo1");
//     var floor = document.getElementById("wood_floor");
//     var grass = document.getElementById("grass_floor");

//     var height = floor.clientHeight;
//     var height_robo = robo.clientHeight;

//     var rect_robo = robo.getBoundingClientRect();
//     var rect_floor = floor.getBoundingClientRect();
//     var rect_grass = grass.getBoundingClientRect();

//     var pos_y1 = rect_robo.top + window.scrollX;
//     var pos_y2 = rect_floor.top + window.scrollX;
//     var pos_y3 = rect_grass.top + window.scrollY;

//     var pos_x1 = rect_robo.left + window.scrollX;
//     var pos_x2 = rect_floor.left + window.scrollX;
//     var pos_x3 = rect_grass.left + window.scrollX;

//     var floor_right = rect_floor.right + window.scrollX;
//     var grass_right = rect_grass.right = window.scrollX;

//     var middle_floor = (pos_x2 + floor_right) / 2;
//     var middle_grass = (pos_x3 + grass_right) / 2;

//     console.log(middle_floor);
//     console.log(middle_grass);


//     var direction = true;
//     const pos_x1_c = pos_x1;
//     const pos_y2_c = pos_y2;
//     const pos_y1_c = pos_y1;
//     id1 = setInterval(frame1, 10);
    
//     function frame1() {
//         if (pos_y1 >= -190 && direction) {
//             pos_y1 -= 2.5;
//             robo.style.top = pos_y1 + 'px';
//         }
//         else if (pos_x1 <= pos_x3 && direction) {
//             var diff = pos_x3 - pos_x2;
//             pos_x1 = pos_x1_c + diff - pos_x2;
//             robo.style.left = diff + 'px';
//             robo.style.transform = 'rotate(180deg)';
//             pos_x1 += pos_x2;
//             direction = false;
//         }
//         else if (pos_y1 <= height && !direction) {
//             robo.style.top = pos_y1 + 'px';
//             pos_y1 += 2.5;
//         }
//         else if (pos_x1 >= pos_x3 && !direction) {
//             var diff = pos_x3 - pos_x2;
//             pos_x1 = pos_x1_c - pos_x2 - 20;
//             robo.style.left = pos_x1 + 'px';
//             robo.style.transform = 'rotate(0deg)';
//             direction = true;
//         }
//         else {
//             clearInterval(id1);
//         }
//     }
// };

// console.log(robo_left);
// console.log(robo_right);
// console.log(floor_left);
// console.log(floor_right);
// console.log(grass_left);
// console.log(grass_right);
// console.log(middle_floor);
// console.log(middle_grass);
// console.log(middle_robo);


// var id1 = null;

// window.onload = function () {
//     var robo = document.getElementById("robo1");
//     var floor = document.getElementById("wood_floor");
//     var grass = document.getElementById("grass_floor");

//     var height = floor.clientHeight;

//     var rect_robo = robo.getBoundingClientRect();
//     var rect_floor = floor.getBoundingClientRect();
//     var rect_grass = grass.getBoundingClientRect();

//     var pos_y1 = rect_robo.top + window.scrollX;

//     var robo_left = rect_robo.left + window.scrollX;
//     var floor_left = rect_floor.left + window.scrollX;
//     var grass_left = rect_grass.left + window.scrollX;
    
//     var robo_right = rect_robo.right;
//     var floor_right = rect_floor.right;
//     var grass_right = rect_grass.right;
    
//     var middle_robo = (robo_left + robo_right) / 2;
//     var middle_floor = (floor_left + floor_right) / 2;
//     var middle_grass = (grass_left + grass_right) / 2;

//     var direction = true;
//     id1 = setInterval(frame1, 10);
    
//     function frame1() {
//         if (pos_y1 >= -190 && direction) {
//             pos_y1 -= 2.5;
//             robo.style.top = pos_y1 + 'px';
//         }
//         else if (middle_robo <= middle_grass && direction) {
//             var diff;
//             if (window.innerWidth > 767.5){
//                 diff = middle_floor - robo_left - (robo_left - floor_left) / 4 + grass_left - floor_left;
//             }else{
//                 diff = floor_left + (robo_left - floor_left) + (middle_robo - robo_left) / 4 + grass_left - floor_left;
//             }
//             robo.style.left = diff + 'px';
//             robo.style.transform = 'rotate(180deg)';
//             direction = false;
//         }
//         else if (pos_y1 <= height && !direction) {
//             robo.style.top = pos_y1 + 'px';
//             pos_y1 += 2.5;
//         }
//         else if (middle_robo >= middle_floor && !direction) {
//             var diff;
//             if (window.innerWidth > 767.5){
//                 diff = middle_floor - robo_left - (robo_left - floor_left) / 4;
//             }
//             else{
//                 diff = floor_left + (robo_left - floor_left) + (middle_robo - robo_left) / 4;
//             }
//             robo.style.left = diff + 'px';
//             robo.style.transform = 'rotate(0deg)';
//             direction = true;
//         }
//         else {
//             clearInterval(id1);
//         }
//     }
// };


