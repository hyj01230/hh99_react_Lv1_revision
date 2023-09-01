# ⛵ 항해99 - React 과제(LV1) 수정본_revision
### 과제명 : To Do List 만들기
### 원본 : [↖️보러가기]([https://hh99-react-lv1-xsqm.vercel.app/](https://github.com/hyj01230/hh99_react_Lv1.git)
___
### 참고 : [이슈1](https://github.com/hyj01230/hh99_react_Lv1/issues/2#issue-1869082391), [이슈2](https://github.com/hyj01230/hh99_react_Lv1/issues/4#issue-1872781734)
### 수정사항
#### 1) id 값
todocards.length + 1로 id을 줬었는데, 카드가 삭제는 등 변화가 생기면 id값이 중복되는 문제가 발생함.
카드마지막 카드에 +1한 id값 부여 / 마지막 카드가 없을때는 id값 1로 주기!
      // arr.at(-1) : 배열의 마지막 인덱스를 가져옴!
      // at() 메서드는 정숫값을 받아 해당 인덱스에 있는 항목을 반환
      id: todocards.length > 0 ? todocards.at(-1).id + 1 : 1,



#### 2) 컴포넌트 분리




#### 3) CSS 수정
