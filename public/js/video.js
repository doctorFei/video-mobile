(function(){
	var videoBox=document.querySelector('.vidio_play_top');
	var Media=document.getElementById('videoPlay');
	var playImg=document.querySelector('.play img');
	
	var allContral=document.querySelector('.control_c');
	var currentContral=document.querySelector('.control_in');
	
	var currentTimeShow=document.querySelector('.current_time');	
	var allTimeShow=document.querySelector('.all_time');
	var allTime;
	
	videoBox.onclick=playPause;
	playImg.onclick=playPause;
	
	allContral.onclick=function(event){
		var e=event|| window.event;
		var scale=e.offsetX/allContral.offsetWidth;
		Media.currentTime=Media.duration*scale;
	}
	
	//时间进度显示函数
    var timer=setInterval(
    	function(){
    		processShow();
    		timeShow()
    	}
    ,1000)
    
	//开始和暂停的功能
	function playPause(){

		if(Media.paused){
			Media.play();
			playImg.style.display='none';
		}else{
			Media.pause();
			playImg.style.display='block';
		}
	}
	
	//进度条显示控制
	function processShow(){
		var ProcessNow = (Media.currentTime / Media.duration) * 5.2;
    	currentContral.style.width=ProcessNow+'rem';	
    	if(Media.currentTime / Media.duration==1){
    		clearTimeout(timer);
    	}
	}
	
	//时间显示控制
	function timeShow(){
		var currentTime =timeFormat(Media.currentTime);
		currentTimeShow.innerText=currentTime;
		var all =timeFormat(Media.duration);
		allTime=Media.duration;
		allTimeShow.innerText=all;
	}
	
	//整理时间格式的函数
	function timeFormat(number) {
		var minute = parseInt(number / 60);
		var second = parseInt(number % 60);
		minute = minute >= 10 ? minute : "0" + minute;
		second = second >= 10 ? second : "0" + second;
		return minute + ":" + second;
	}
	
	//全屏显示
	document.querySelector('.screen').onclick=function(){
		Media.webkitRequestFullScreen();
	}
	
})()
