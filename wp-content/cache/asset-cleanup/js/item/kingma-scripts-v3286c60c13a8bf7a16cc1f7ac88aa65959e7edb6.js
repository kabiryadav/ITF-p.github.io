/*!/wp-content/themes/kingma/assets/js/app.js*/var DECENTTHEMES=DECENTTHEMES||{};(function($){"use strict";DECENTTHEMES.initialize={init:function(){DECENTTHEMES.initialize.defaults();DECENTTHEMES.initialize.siteMenu();DECENTTHEMES.initialize.sectionCustomize();DECENTTHEMES.initialize.swiperInit();DECENTTHEMES.initialize.countUp();DECENTTHEMES.initialize.isotopeInit();DECENTTHEMES.initialize.gmap3();DECENTTHEMES.initialize.parallaxBGImg();DECENTTHEMES.initialize.parallaxBGVdo();DECENTTHEMES.initialize.navigationBar();DECENTTHEMES.initialize.sectionSwitch();DECENTTHEMES.initialize.contactForm()},defaults:function(){new WOW().init();$('a.lightbox').lightbox();if(window.innerHeight<600||window.innerWidth<600){$('#header').addClass('scrolledx')}else{$('#header').removeClass('scrolledx')}
$(window).load(function(){$(".loader").fadeOut();$("#preloader").delay(350).fadeOut("slow")});if($('#back-to-top').length){var scrollTrigger=window.innerHeight,backToTop=function(){var scrollTop=$(window).scrollTop();if(scrollTop>scrollTrigger){$('#back-to-top').addClass('show')}else{$('#back-to-top').removeClass('show')}};backToTop();$(window).on('scroll',function(){backToTop()});$('#back-to-top').on('click',function(e){e.preventDefault();$('html,body').animate({scrollTop:0},700)})}
$('.process-flow-content > div:first-child').addClass('active in')},siteMenu:function(){var timer;$('#primary-menu ul.menu-items > li.menu-item-has-children').on({mouseenter:function(){var self=this;clearTimeout(timer);timer=setTimeout(function(){$(self).children('.sub-menu').addClass('visible')},100)},mouseleave:function(){var self=this;setTimeout(function(){if(!$(self).children('.sub-menu').is(":hover")){$(self).children('.sub-menu').removeClass('visible')}},400)}})},skillBars:function(){$('.dt-progress > span').each(function(){var proWidth=$(this).data('amount');$(this).animate({width:proWidth},500)})},sectionCustomize:function(){$('[data-bg-color]').each(function(){var value=$(this).data('bg-color');$(this).css({backgroundColor:value,})});$('[data-bg-image]').each(function(){var img=$(this).data('bg-image');$(this).css({backgroundImage:'url('+img+')',})});function elementPadding(attr){$(attr).each(function(){if(attr==='[data-padding]'){var data={padding:$(this).data('padding')}}else if(attr==='[data-padding-top]'){var data={paddingTop:$(this).data('padding-top')}}else if(attr==='[data-padding-right]'){var data={paddingRight:$(this).data('padding-right')}}else if(attr==='[data-padding-bottom]'){var data={paddingBottom:$(this).data('padding-bottom')}}else if(attr==='[data-padding-left]'){var data={paddingLeft:$(this).data('padding-left')}}
$(this).css(data)})}
elementPadding('[data-padding]');elementPadding('[data-padding-top]');elementPadding('[data-padding-right]');elementPadding('[data-padding-bottom]');elementPadding('[data-padding-left]');function elementMargin(attr){$(attr).each(function(){if(attr==='[data-margin]'){var data={margin:$(this).data('margin')}}else if(attr==='[data-margin-top]'){var data={marginTop:$(this).data('margin-top')}}else if(attr==='[data-margin-right]'){var data={marginRight:$(this).data('margin-right')}}else if(attr==='[data-margin-bottom]'){var data={marginBottom:$(this).data('margin-bottom')}}else if(attr==='[data-margin-left]'){var data={marginLeft:$(this).data('margin-left')}}
$(this).css(data)})}
elementMargin('[data-margin]');elementMargin('[data-margin-top]');elementMargin('[data-margin-right]');elementMargin('[data-margin-bottom]');elementMargin('[data-margin-left]');$('.background-video').background()},swiperInit:function(){$('[data-carousel="swiper"]').each(function(){var $this=$(this);var $container=$this.find('[data-swiper="container"]');var $asControl=$this.find('[data-swiper="ascontrol"]');var conf=function(element){var obj={slidesPerView:element.data('items'),centeredSlides:element.data('center'),loop:element.data('loop'),initialSlide:element.data('initial'),effect:element.data('effect'),spaceBetween:element.data('space'),autoplay:element.data('autoplay'),direction:element.data('direction'),paginationClickable:!0,breakpoints:element.data('breakpoints'),slideToClickedSlide:element.data('click-to-slide'),loopedSlides:element.data('looped'),fade:{crossFade:element.data('crossfade')}};return obj}
var $primaryConf=conf($container);$primaryConf.prevButton=$this.find('[data-swiper="prev"]');$primaryConf.nextButton=$this.find('[data-swiper="next"]');$primaryConf.pagination=$this.find('[data-swiper="pagination"]');var $ctrlConf=conf($asControl);function animateSwiper(selector,slider){var makeAnimated=function animated(){selector.find('.swiper-slide-active [data-animate]').each(function(){var anim=$(this).data('animate');var delay=$(this).data('delay');var duration=$(this).data('duration');$(this).addClass(anim+' animated').css({webkitAnimationDelay:delay,animationDelay:delay,webkitAnimationDuration:duration,animationDuration:duration}).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass(anim+' animated')})})};makeAnimated();slider.on('SlideChangeStart',function(){selector.find('[data-animate]').each(function(){var anim=$(this).data('animate');$(this).removeClass(anim+' animated')})});slider.on('SlideChangeEnd',makeAnimated)};if($container.length){var $swiper=new Swiper($container,$primaryConf);animateSwiper($this,$swiper);if($asControl.length){var $control=new Swiper($asControl,$ctrlConf);$swiper.params.control=$control;$control.params.control=$swiper}}else{console.log('Swiper container is not defined!')}})},countUp:function(){$('[data-countup]').each(function(){var amount=$(this).data('countup');var conf={useEasing:!0,useGrouping:!0,separator:'',decimal:'',prefix:'',suffix:''};var countUp=new CountUp(this,0,amount,0,2,conf);$(this).appear(function(){countUp.start()},{accX:0,accY:0})})},isotopeInit:function(){$('[data-area="isotope"]').each(function(){var container='#'+$(this).find('[data-isotope="container"]').attr('id');var filters='#'+$(this).find('[data-isotope="filters"]').attr('id');var $portfolio=$(container).isotope({itemSelector:'.grid-item',masonry:{columnWidth:2}});$(filters).on('click','button',function(){var filterValue=$(this).attr('data-filter');$portfolio.isotope({filter:filterValue})})});$('.button-group').each(function(i,buttonGroup){var $buttonGroup=$(buttonGroup);$buttonGroup.on('click','button',function(){$buttonGroup.find('.active').removeClass('active');$(this).addClass('active')})})},gmap3:function(){function isMobile(){return('ontouchstart'in document.documentElement)}
function gmap3Prepare(attr,lat,lng,img){if(typeof google=='undefined')return;var options={center:[lat,lng],zoom:15,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!0,scrollwheel:!1,streetViewControl:!0}
if(isMobile()){options.draggable=!1}
$(attr).gmap3({map:{options:options},marker:{latLng:[lat,lng],options:{icon:img}}})}
$('.gmap3-area').each(function(){var lat=$(this).data('lat');var lng=$(this).data('lng');var img=$(this).data('img');var i=$(this);gmap3Prepare(i,lat,lng,img)});$('[data-area="map"]').each(function(){var mapCotainer=$(this).find('.gmap3-section');var mapToggle=$(this).find('[data-toogle="map"]');$(mapToggle).click(function(){$(mapCotainer).toggleClass('full')})})},parallaxBGImg:function(){$('[data-parallax="image"]').each(function(){var actualHeight=$(this).position().top;var speed=$(this).data('parallax-speed');var reSize=actualHeight-$(window).scrollTop();var makeParallax=-(reSize/2);var posValue=makeParallax+"px";$(this).css({backgroundPosition:'50% '+posValue,})})},parallaxBGVdo:function(){$('[data-parallax="video"]').each(function(){var actualHeight=$(this).position().top;var reSize=actualHeight-$(window).scrollTop();var makeParallax=-(reSize/2);var posValue=makeParallax+"px";$(this).find('.fs-background-media').css({top:posValue,})})},header:function(){if(window.innerHeight<600||window.innerWidth<600){$('#header').addClass('scrolledx')}else{$('#header').removeClass('scrolledx')}
if($(window).scrollTop()>50){$('#header').addClass('scrolled')}else{$('#header').removeClass('scrolled')}},navigationBar:function(){$('#nav-trigger').click(function(){$("body").toggleClass('v-menu-active');$("#top-menu").toggleClass('active');$("#mobile-menu").toggleClass('active');$('#top-menu .menu-items').removeClass('nav-visible');$('#top-menu .menu-items').delay(50).queue(function(){$(this).addClass('nav-visible').clearQueue()})});$('.menu-item a').click(function(){$("#top-menu").removeClass('active')})},sectionSwitch:function(){$('[data-type="section-switch"], #top-menu .menu-items > li > a, #side-menu ul > li > a').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return!1}}})},contactForm:function(){$('.dt-contact-form-ajax').each(function(){var $this=$(this);$this.submit(function(){$this.find('button[type="submit"]').addClass('clicked');var action=$(this).attr('action');$.ajax({url:action,type:'POST',data:{action:$this.attr('action'),name:$this.find('input[name="name"]').val(),email:$this.find('input[name="email"]').val(),messages:$this.find('textarea[name="messages"]').val()},success:function(data){$this.find('.dt-ajax-response').html(data).addClass('success').css('display','block');$this.find('button[type="submit"]').removeClass('clicked')},error:function(){$this.find('.dt-ajax-response').html('Sorry, an error occurred.').addClass('error').css('display','block');$this.find('button[type="submit"]').removeClass('clicked')}});return!1})})}};DECENTTHEMES.documentOnReady={init:function(){DECENTTHEMES.initialize.init()},};DECENTTHEMES.documentOnResize={init:function(){DECENTTHEMES.initialize.swiperInit()},};DECENTTHEMES.documentOnScroll={init:function(){DECENTTHEMES.initialize.header();DECENTTHEMES.initialize.parallaxBGImg();DECENTTHEMES.initialize.parallaxBGVdo()},};$(document).ready(DECENTTHEMES.documentOnReady.init);$(document).on('scroll',DECENTTHEMES.documentOnScroll.init);$('.skill-items').appear(function(){DECENTTHEMES.initialize.skillBars()},{accX:0,accY:-300})})(jQuery);jQuery(document).ready(function(){jQuery('.rightmain-tab .tabs-left li:first').addClass('active')});