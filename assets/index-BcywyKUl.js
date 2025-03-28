(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const c=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
          <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
  
        <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
            <li><a href="/" class="text-blue-600">홈</a></li>

            ${localStorage.getItem("user")?` <li><a href="/profile" class="text-gray-600">프로필</a></li>
                            <li><a href="#" id=logout class="text-gray-600">로그아웃</a></li>`:'<li><a href="/login" class="text-gray-600">로그인</a></li> '} 
           
           
          </ul>
        </nav>
  
  `;function u(){const t=document.getElementById("logout");t&&t.addEventListener("click",o=>{o.preventDefault(),console.log("로그아웃 클릭됨"),localStorage.removeItem("user"),window.location.hash.length>0?window.location.hash="#/":window.history.pushState({},"","/"),window.router()})}const p=()=>`

 <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>

`,b=t=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${c()}
      <main class="p-4">
        <div class="space-y-4">
          ${t()}
        </div>
      </main>
      ${p()}
    </div>
  </div>
`,m=()=>`
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
   <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
             <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
       
`,f=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form>
        <div class="mb-4">
          <input id='id' type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id='password' type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button id='loginbtn' type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`;function g(){const t=document.getElementById("id"),o=document.querySelector("form");if(!o){console.error("로그인 폼을을 찾을 수 없습니다.");return}o.addEventListener("submit",l=>{l.preventDefault();const n={username:t.value,email:"",bio:""};localStorage.setItem("user",JSON.stringify(n)),window.location.hash.length>0?window.location.hash="#/profile":window.history.pushState({},"","/profile"),window.router()})}const h=()=>{const t=JSON.parse(localStorage.getItem("user")||"{}");return`
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
        내 프로필
      </h2>
      <form id="profile-form">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
            사용자 이름
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value="${t.username||""}"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value="${t.email||""}"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-6">
          <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">
            자기소개
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            class="w-full p-2 border rounded"
          >${t.bio||""}</textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  `};function v(){const t=document.querySelector('button[type="submit"]');t&&t.addEventListener("click",o=>{o.preventDefault();const l=document.getElementById("username").value,n=document.getElementById("email").value,e=document.getElementById("bio").value,s={username:l,email:n,bio:e};localStorage.setItem("user",JSON.stringify(s)),alert("프로필이 저장되었습니다!"),window.location.hash.length>0?window.location.hash="#/profile":window.history.pushState({},"","/profile"),window.router()})}const w=()=>`
  
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>

`,a={"/":m,"/login":f,"/profile":h,"/404":w},i=()=>{let t=window.location.pathname;const o=JSON.parse(localStorage.getItem("user")||"null");t==="/profile"&&!o&&(t="/login",window.history.replaceState({},"",t)),t==="/login"&&o&&(t="/",window.history.replaceState({},"",t));const l=a[t]||a["/404"],n=t==="/login"||t==="/404"?l():b(l);document.getElementById("root").innerHTML=n,t==="/login"&&g(),t!=="/login"&&t!=="/404"&&u(),t=="/profile"&&v(),x()};window.router=i;const x=()=>{document.querySelectorAll("a").forEach(t=>{t.removeEventListener("click",d),t.addEventListener("click",d)})},d=t=>{t.preventDefault();const o=t.currentTarget.getAttribute("href");window.history.pushState({},"",o),i()};window.addEventListener("popstate",i);window.addEventListener("DOMContentLoaded",()=>{i()});navigator.userAgent.includes("jsdom")&&localStorage.removeItem("user");window.addEventListener("DOMContentLoaded",()=>{i()});window.addEventListener("popstate",()=>{i()});window.addEventListener("DOMContentLoaded",()=>{i()});
