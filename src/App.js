import './App.css';
import { useState } from 'react';

function App() {

  // 📍1) 인풋(제목, 내용) 입력값
  const [inputTitle, setInputTitle] = useState('');
  const [inputContents, setInpuContents] = useState('');

  // 📍3) 인풋(제목, 내용)이 변경될 때
  //setinputTitle(evet.target.value : 인풋에 입력한 값이 들어옴) : set만나서 inputTitle로 들어감
  const onChangeTitleHandler = (evet) => { setInputTitle(evet.target.value); }
  const onChangeContentsHandler = (evet) => { setInpuContents(evet.target.value) }

  // 📍8) todo 카드 정보 모음(정보 변경되면 다시 렌더링=useState로 만들기!)
  const [todocards, settodocards] = useState([
    { id: 1, title: '리액트 공부하기', contents: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '알고리즘 공부하기', contents: '프로그래머스를 풀어봅시다.', isDone: true }
  ])

  // 📍6) '추가하기' 버튼 클릭
  const clickAddButtoHandler = () => {
    // 📍7) 알림창 띄우고, 인풋박스 초기화
    // alert('할수이써~👏👏👏')
    setInputTitle('')
    setInpuContents('')

    // 📍9) 새로운 todo 카드 만들기 : isDone의 기본값은 false
    const newTodoCard = {
      // id : 마지막 카드에 +1한 id값 부여 / 마지막 카드가 없을때는 id값 1로 주기!
      // arr.at(-1) : 배열의 마지막 인덱스를 가져옴!
      // at() 메서드는 정숫값을 받아 해당 인덱스에 있는 항목을 반환
      id: todocards.length > 0 ? todocards.at(-1).id + 1 : 1,
      title: inputTitle,
      contents: inputContents,
      isDone: false
    }

    // 📍10) 새로운 todo 카드를 배열(todo 카드 정보 모음)에 추가
    // 불변성 유지(settodocards에 원래 배열을 풀고, 새로운 todo 카드를 더해줌)
    settodocards([...todocards, newTodoCard])
    console.log(todocards)  // id 값 확인하기
  }

  // 📍13) '삭제' 버튼 클릭 = id값 넘겨받음!
  const clickRemoveButton = (clickRemoveButtonID) => {

    // 📍14) 삭제눌린 카드는 filter에서 빼고, 다시 렌더링 해줌
    const removeCard = todocards.filter(item => item.id !== clickRemoveButtonID)
    settodocards(removeCard);
  }

  // 📍16) '완료' 버튼 클릭 = id값 넘겨받음!
  const clickCompleteButton = (clickCompleteButtonId) => {

    // 📍17) 완료된 카드 isDone 변경하기🚨
    // 각 요소에 대한 수정이 있어야 해서 filter는 못씀!!!!!!!
    // 완료 클릭해서 id 받아온 카드의 isDone 값을 true로 변경해서 랜더링해주는데,
    // 밑에서 filter로 item이 false 인것만 추출해서 true인건 카드가 사라짐
    const updateComplete = todocards.map(item => {
      if (item.id === clickCompleteButtonId) {
        return { ...item, isDone: true };
      } else { return item };
    });
    console.log(updateComplete)
    settodocards(updateComplete);
  }


  // 📍18) '취소' 버튼 클릭 = id값 넘겨받음!
  const clickCancleButton = (clickCancleButtonId) => {

    // 📍19) 취소된 카드 isDone 변경하기🚨
    // 각 요소에 대한 수정이 있어야 해서 filter는 못씀!!!!!!!
    // 취소 클릭해서 id 받아온 카드의 isDone 값을 false 변경해서 랜더링해주는데,
    // 밑에서 filter로 item이 true로 인것만 추출해서 false인건 카드가 사라짐
    const updateCancle = todocards.map(item => {
      if (item.id === clickCancleButtonId) {
        return { ...item, isDone: false };
      } else { return item };
    })
    settodocards(updateCancle);
  }

  return (
    <div className="box">

      <div className="gnb">
        <span>My Todo List</span>
        <span>React</span>
      </div>

      <div className='inputSpace'>
        {/* 📍2) 1번과 인풋박스 연결!
               value(set으로 들어온 값이 재할당됨), onChange(인풋에 변화가 일어날때 진행됨)
            📍4) 3번을 onChange에 넣어주기! */}
        제목 <input type="text" className='inputBox1'
          value={inputTitle}
          onChange={onChangeTitleHandler} />
        내용 <input type="text" className='inputBox2'
          value={inputContents}
          onChange={onChangeContentsHandler} />

        {/* 📍5) onClick 할때 일어나는 상황 작성 */}
        <button className='addButton'
          onClick={clickAddButtoHandler}
        >추가하기</button>
      </div>

      <div className='todoStateZone'>
        🔥Working🔥
      </div>
      <div className='todoCardZone'>
        {/* 📍20) 카드 그려주기
        todocards 배열의 각 요소를 돌면서 카드를 생성함
        filter로 isDone이 false 인 것만 추출
        map은 배열의 각 요소마다 새로운 배열을 반환함 */}
        {todocards.filter(item => item.isDone === false).map(function (item) {
          return (
            // W_Card 컴포넌트 가져오기
            <W_Card
              item={item}
              key={item.id}
              clickRemoveButton={clickRemoveButton}
              clickCompleteButton={clickCompleteButton}
            />
          )
        })}
      </div>

      <div className='todoStateZone'>
        🎉Done🎉
      </div>

      <div className='todoCardZone'>
        {/* 📍20) 카드 그려주기
        todocards 배열의 각 요소를 돌면서 카드를 생성함
        filter로 isDone이 true 인 것만 추출
        map은 배열의 각 요소마다 새로운 배열을 반환함 */}
        {todocards.filter(item => item.isDone === true).map(function (item) {
          return (
            // D_Card 컴포넌트 가져오기
            <D_Card
              item={item}
              key={item.id}
              clickRemoveButton={clickRemoveButton}
              clickCancleButton={clickCancleButton} />
          )
        })}
      </div>

    </div >
  );
}

// 📍11) Working Card 컴포넌트 분리
const W_Card = ({item, clickRemoveButton, clickCompleteButton}) => {
  return (
    <div key={item.id} className='todoCard'>
      <span>{item.title}</span>
      <p>{item.contents}</p>
      {/* 📍12) 삭제 누르면 item.id값 넘겨줌! = map 돌때 식별 할 수 있는 값 */}
      <button className='todoCardButton1'
        onClick={() => clickRemoveButton(item.id)}
      >삭제</button>
      {/* 📍15) 완료 누르면 item.id값 넘겨줌! */}
      <button className='todoCardButton2'
        onClick={() => clickCompleteButton(item.id)}
      >완료</button>
    </div>
  )
}

// 📍11) Done Card 컴포넌트 분리
const D_Card = ({item, clickRemoveButton, clickCancleButton}) => {
  return (
    <div key={item.id} className='todoCard'>
      <span>{item.title}</span>
      <p>{item.contents}</p>
      {/*📍12) 삭제 누르면 item.id값 넘겨줌! = map 돌때 식별 할 수 있는 값 */}
      <button className='todoCardButton1'
        onClick={() => clickRemoveButton(item.id)}
      >삭제</button>
      {/* 📍17) 취소 누르면 item.id값 넘겨줌! */}
      <button className='todoCardButton2'
        onClick={() => clickCancleButton(item.id)}
      >취소</button>
    </div>
  )
}

export default App;
