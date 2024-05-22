import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  //NOTE : 카카오톡에서 토큰 받으면 그 토큰 쿠키에 저장하는 로직
  if (request.nextUrl.pathname === '/auth') {
    // NOTE : url에서 토큰 부분 떼고 쿠키에 저장
    const accessToken = request.nextUrl.searchParams.get('accessToken');

    // NOTE : 이미 가입한 사람이면 홈 화면으로 이동 아니면 회원가입으로
    const firstLogin = request.nextUrl.searchParams.get('firstLogin');

    const response =
      firstLogin === 'no'
        ? NextResponse.redirect(new URL('/designerList', request.nextUrl))
        : NextResponse.redirect(new URL('/signup', request.nextUrl));

    if (accessToken) {
      response.cookies.set('accessToken', accessToken, { path: '/' });
    } else {
      // NOTE : 액세스 토큰이 없는 경우 요청을 거부하고 로그인 페이지로 리다이렉트
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    return response;
  }
}

export const config = {
  matcher: ['/', '/auth'],
};
