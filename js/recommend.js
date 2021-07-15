// 마우스 휠도 화면단위로 이동

// $(".box").each(function () {
//     $(this).on("mousewheel DOMMouseScroll", function (e) {
//         e.preventDefault();
//         var delta = 0;
//         /* IE */
//         if (!event) event = window.event;
//         //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
//         if (event.wheelDelta) {
//             delta = event.wheelDelta / 50;
//             //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
//             if (window.opera) delta = -delta;
//         //휠에 대한 정보 얻기 Mozilla FF = detail
//         } else if (event.detail) delta = -event.detail / 3;
//         var moveTop = null;
//         // 마우스휠을 위에서 아래로
//         if (delta < 0) {
//             if ($(this).next() != undefined) {
//                 moveTop = $(this).next().offset().top;
//             }
//         // 마우스휠을 아래에서 위로
//         } else {
//             if ($(this).prev() != undefined) {
//                 moveTop = $(this).prev().offset().top;
//             }
//         }
//         // 화면 이동 0.8초(800)
//         $("html,body").stop().animate({
//             scrollTop: moveTop + 'px'
//         }, {
//             duration: 1000, complete: function () {
//             }
//         });
//     });
// });