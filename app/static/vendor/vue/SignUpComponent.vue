<template>
    <div class="page_aticle">
        <div class="page_location">
            <a class="link" href="/">홈</a>
            >
            <strong class="current">회원가입</strong>
        </div>

        <div class="head_section head_join">
            <h2 class="tit">회원가입</h2>
        </div>

        <div class="member_join">
            <div class>
                <form>
                    <div class="field_head head_type1">
                        <h3 class="tit">
                            <span class="screen_out">기본정보</span>
                        </h3>
                        <p class="sub">*필수입력사항</p>
                    </div>

                    <div class="boardWrite">
                        <table class="tbl_comm">
                            <tbody>
                                <tr>
                                    <td class="memberCols1">아이디*</td>
                                    <td class="memberCols2">
                                        <input type="text" name="m_id" value maxlength="16" required label="아이디" placeholder="6자 이상의 영문과 숫자를 조합">
                                        <a href="">
                                            <span class="bhs_button">중복확인</span>
                                        </a>
                                        <p class="txt_guide">
                                            <span class="txt txt_case1">6자 이상의 영문 혹은 영문과 숫자를 조합</span>
                                            <span class="txt txt_case2">아이디 중복확인</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="memberCols1">비밀번호*</td>
                                    <td class="memberCols2">
                                        <input type="password" name="m_pw" required label="비밀번호" maxlength="16" class="reg_pw" placeholder="비밀번호를 입력해주세요">
                                        <p class="txt_guide"></p>
                                    </td>
                                </tr>
                                <tr class="member_pwd">
                                    <td class="memberCols1">비밀번호확인*</td>
                                    <td class="memberCols2">
                                        <input type="password" name="m_pw2" required label="비밀번호" maxlength="16" class="confirm_pw" placeholder="비밀번호를 한번 더 입력해주세요">
                                        <p class="txt_guide"></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="memberCols1">이름*</td>
                                    <td class="memberCols2">
                                        <input type="text" name="m_name" required label="이름" placeholder="성함을 입력해주세요">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="memberCols1">이메일*</td>
                                    <td class="memberCols2">
                                        <input type="text" name="m_email" size="30" required label="이름" placeholder="example@ex.ex">
                                        <a href="">
                                            <span class="bhs_button">이메일 중복확인</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="select_sex">
                                    <td class="memberCols1">성별</td>
                                    <td class="memberCols2">
                                        <div class="group_radio">
                                            <label class="label_radio">
                                                <input type="radio" name="sex_option" label="성별" value="w">
                                                <span class="text_position">여자</span>
                                            </label>
                                            <label class="label_radio">
                                                <input type="radio" name="sex_option" label="성별" value="m">
                                                <span class="text_position">남자</span>
                                            </label>
                                            <label class="label_radio">
                                                <input type="radio" name="sex_option" label="성별" value="n">
                                                <span class="text_position">선택안함</span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="birth field_birth">
                                    <td class="memberCols1">생년월일</td>
                                    <td class="memberCols2">
                                        <div class="birth_day">
                                            <input type="text" name="birth_year" id="birth_year" pattern="[0-9]*" label="생년월일" size="4" maxlength="4" placeholder="YYYY">
                                            <span class="bar"><span>/</span></span>
                                            <input type="text" name="birth[]" id="birth_month" pattern="[0-9]*" label="생년월일" size="2" maxlength="2" placeholder="MM">
                                            <span class="bar"><span>/</span></span>
                                            <input type="text" name="birth[]" id="birth_day" pattern="[0-9]*" label="생년월일" size="2" maxlength="2" placeholder="DD">
                                        </div>
                                        <p class="txt_guide"><span class="txt bad"></span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="avoidDbl">
                        <button type="submit" class="btn_submit">가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.member_join {
    width: 640px;
    margin: 0 auto;
}
</style>