<template>
    <div id="header">
      <link rel="stylesheet" href="../static/css/header-style.css">
        <div id="userMenu">
            <ul class="list_menu">
                <li class="menu none_sub menu_join">
                    <a :href="'/signUp'" class="link_menu">회원가입</a>
                </li>
                <li class="menu none_sub">
                    <a href="" class="link_menu">로그인</a>
                </li>
                <li class="menu">
                    <a href="" class="link_menu">고객센터</a>
                    <ul class="sub">
                        <li><a href="">공지사항</a></li>
                        <li><a href="">자주하는 질문</a></li>
                        <li><a href="">1:1 문의</a></li>
                        <li><a href="">상품 제안</a></li>
                        <li><a href="">에코포장 피드백</a></li>
                    </ul>
                </li>
                <li class="menu lst">
                    <a href="" class="link_menu">배송지역 검색</a>
                </li>
            </ul>
        </div>

        <div id="headerLogo" class="layout-wrapper">
          <h1 class="logo">
            <a href="">
              <span id="gnbLogoContainer"></span>
              <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리 로고">
            </a>
          </h1>
          <a href="" class="bnr_delivery">
            <img src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif" alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송">
          </a>
        </div>

        <div id="gnb">
          <h2 class="screen_out">메뉴</h2>
          <div id="gnbMenu" class="gnb_kurly">
            <div class="inner_gnbkurly">
              <div class="gnb_main">
                <ul class="gnb">
                  <li class="menu1">
                    <a href="" class>
                      <span class="ico"></span>
                      <span class="txt">전체 카테고리</span>
                    </a>
                  </li>
                  <li><a href=""><span class="txt">신상품</span></a></li>
                  <li><a href=""><span class="txt">베스트</span></a></li>
                  <li><a href=""><span class="txt">알뜰쇼핑</span></a></li>
                  <li class="lst"><a href=""><span class="txt">이벤트</span></a></li>
                </ul>
                <div id="side_search" class="gnb_search"></div>
                <div class="cart_count"></div>
              </div>
              <div class="gnb_sub">
                <div class="inner_sub">
                  <ul data-default="219" data-min="219" data-max="731" class="gnb_menu" style="height: auto;">
                    <li class>
                      <a class="menu">
                        <span class="ico">
                          <img src="https://img-cf.kurly.com/shop/data/category/icon_veggies_inactive_pc@2x.1568681848.png" alt="카테고리 아이콘" class="ico_off">
                          <img src="https://img-cf.kurly.com/shop/data/category/icon_veggies_active_pc@2x.1568681849.png" alt="카테고리 아이콘" class="ico_on">
                        </span>
                        <span class="tit">
                          <span class="txt">채소</span>
                        </span>
                      </a>
                      <ul class="sub_menu">
                        <li>
                          <a class="sub">
                            <span class="name">기본채소</span>
                          </a>
                        </li>
                        <li class>
                          <a class="name">쌈·샐러드·간편채소</a>
                        </li>
                        <li>
                          <a class="sub">
                            <span class="name">기본채소</span>
                          </a>
                        </li>
                        <li>
                          <a class="sub">
                            <span class="name">브로콜리·특수채소</span>
                          </a>
                        </li>
                        <li>
                          <a class="sub">
                            <span class="name">콩나물·버섯류</span>
                          </a>
                        </li>
                        <li>
                          <a class="sub">
                            <span class="name">양파·마늘·생강·파</span>
                          </a>
                        </li>
                        <li>
                          <a class="sub">
                            <span class="name">시금치·부추·나물</span>
                          </a>
                        </li>
                        <li>
                          <a class="sub">
                            <span class="name">파프리카·피망·고추</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class>
                      <a class="menu">
                        <span class="ico">
                          
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import router from './routes';

export default {
    router
}
</script>

<style scoped>



</style>