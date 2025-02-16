$(function () {

// スムーススクロール
  // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false; 
    });

// ハンバーガーメニューのクリックイベント
    $("#hamburger, #mask, #navi a").on("click", function () {
    ($("#header").toggleClass("open"));
});


// 画面幅が 840px 以下のとき → #side-menu は 常に非表示
// 画面幅が 841px 以上のとき → #side-menu も #to-top と一緒に fadeIn() / fadeOut()
    $(document).ready(function () {
        var pagetop = $('#to-top');
        var sideMenu = $('#side-menu');
        
    // 初期非表示
        pagetop.hide();
        sideMenu.hide();
    
        function toggleSideMenu() {
            if ($(window).width() <= 840) {
                sideMenu.hide(); // 840px 以下では常に非表示
            }
        }
    
    // ページ読み込み時に実行
        toggleSideMenu();
    
    // 画面リサイズ時に再判定
        $(window).resize(function () {
            toggleSideMenu();
        });
    
    // スクロールによる #to-top & #side-menu の表示・非表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                pagetop.fadeIn();
                if ($(window).width() > 840) {
                    sideMenu.fadeIn();
                }
            } else {
                pagetop.fadeOut();
                if ($(window).width() > 840) {
                    sideMenu.fadeOut();
                }
            }
        });
        
    // #to-top クリックでスクロールトップ
        pagetop.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });




// よくあるご質問のクリックイベント
    $(".faq__list__item__contents").on("click", function () {
        $(this).next('.answer').slideToggle(); // 以降の要素を実行する
        $(this).toggleClass("open");
    });


// ページ読み込み完了時にバナーのブロックを表示
    window.onload = function(){
    $("#overview").show();  
    }
    /* ×ボタンが押されたとき、バナーブロックを非表示 */
    $("#close").on("click", function(){
        $("#overview").hide();
    });
});

