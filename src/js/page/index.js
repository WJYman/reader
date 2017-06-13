/**
 * Created by TR on 2017/6/12.
 */
var $=require("../lib/jquery-2.1.1.min");

$(function () {

    var obj={
        fn:function () {
            //点击显示/隐藏功能
            $(".r-main").click(function () {
                $(".r-header").toggle();
                $(".r-action").toggle();
                $(".r-list").hide();
            });

            //显示章数
            $(".header-btn").click(function () {
                $(".r-list").toggle();
            });

            //确定章节隐藏功能
            $(".r-list>a").click(function () {
                var para=$(this).data("id"),
                    url=location.href+"#"+para;
                    location.hash="#"+para;

                $(".r-header").hide();
                $(".r-list").hide();
                $(".r-action").hide();
            });

            // 修改背景颜色
            $(".r-action>.r-bg>button").click(function () {
                var _index=$(this).index();  //获取下标
                var bg=["white","green","pink","greenyellow","lightblue"];
                $(this).addClass("r-sure").siblings().removeClass("r-sure");
                $(".r-main").css("background",bg[_index]);
            });

            // 修改字体大小
            $(".r-action>.r-fontSize>button").click(function () {
                var _index=$(this).index();    //获取下标
                $(this).addClass("r-sure").siblings().removeClass("r-sure");
                var fontSize=["12px","16px","20px","24px","28px"];
                $(".r-main").css("font-size",fontSize[_index]);
            });

            // 修改字体颜色
            $(".r-action>.r-fontColor>button").click(function () {
                var _index=$(this).index();     //获取下标
                var fontSize=["black","red","white","blue","blueviolet"];
                $(this).addClass("r-sure").siblings().removeClass("r-sure");
                $(".r-main").css("color",fontSize[_index]);
            });
        }
    };
    obj.fn();
});
