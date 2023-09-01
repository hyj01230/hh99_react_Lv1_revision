# ⛵ 항해99 - React 과제(Lv1) 수정본_revision
### 과제명 : To Do List 만들기
### 원본 : [↖️보러가기](https://github.com/hyj01230/hh99_react_Lv1.git)
### 참고 : [Issues1](https://github.com/hyj01230/hh99_react_Lv1/issues/2#issue-1869082391), [Issues2](https://github.com/hyj01230/hh99_react_Lv1/issues/4#issue-1872781734)
-------------------
### 🔨수정사항
### 1) id 값
todocards.length + 1로 id을 줬는데, 카드를 삭제하는 등 변화가 생기면 id값이 중복되는 문제가 발생함.  
arr.at(-1)와 삼항연산자를 사용해 마지막 카드에 +1한 id값 부여하고, 마지막 카드가 없을때는 id값 1로 주는 것으로 수정함.  
- at() 메서드 : 정숫값을 받아 해당 인덱스에 있는 항목을 반환
- id: todocards.length > 0 ? todocards.at(-1).id + 1 : 1<br/>

  
### 2) 컴포넌트 분리
Working / Done 카드를 컴포넌트로 분리함<br/>

  
### 3) CSS 수정
카드가 4개 이상이 되면 가득차서 카드가 변형되었는데, flex-wrap: wrap;를 추가해 일정 공간 이상은 아래로 넘어가게 수정함.  
height: 200px; > min-height: 200px; 수정해서 늘어날수는 있지만, 최소 높이 이하로는 줄지 않도록 변경함.
