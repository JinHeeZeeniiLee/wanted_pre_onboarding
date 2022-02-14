# 구현한 방법과 이유

** Modal은 CODESTATES에서 final project할때 
styled-components를 이용해서 구현했는데 
Modal이 필요하다는 의견으로 여러가지 많이 시도 하며 구현했습니다.

component에서 버튼을 클릭할떄 
ModalBackDrop Element로 흐린화면에서
Modal 창이 보일수 있게 하였습니다. **

Tab은 3개의 Tab 메뉴들을 3개로 설정하여
gif에서 보이는 것 처럼 하나의  tab을 클릭할때 
객체요소로 되어 있는 배열을 하나씩 나올수 있도록 구현했습니다. 

Toggle은 IOS에서 많이 쓰이는데. 
클릭할때 활성화가 될수 있도록 IOS에서 자주 보이는 버튼 형식으로 구현했습니다. 


# 구현하면서 어려웠던 점과 해결방법 

Modal에서는 styled-components에서 element 끼리 색상이 
일치하지 않아서 어떤게 문제였을까 생각을했는데
modal창에서 attrs 메소드의 role에서 string이 아닌 
백틱(``) 리터럴을 사용하고 보니 코드에서 색상을 맞출 수 있게 되었습니다. 

Toggle에서는 버튼을 누르면 왼쪽에서 오른쪽으로 이동이 되지만
활성하는 바탕색이 변화가 없어 다시 확인해 보니

{& .toggle--checked} 가 아닌
{&.toggle--checked}로 수정하여 Toggle의 바탕색이 
색상에 맞게 변경되었습니다. 

# 자세한 실행방법

Modal에서는 Open Modal 버튼이 있습니다. 

그버튼을 누르면 Modal 한개와 그외에 있는 화면은 옅은색으로 변하고
다시 원래 화면으로 돌아 갈때에는 Modal창 내에 있는 x(times) 버튼을 누르면
원래 화면으로 돌아옵니다. 

Tab에서는 초기 tab은 'Tab1'부터 되어 있습니다. 
다른 tab을 누를때마다 선택된 탭은 활성화된 tab색상으로 변하고 
하단 부에 있는 content가 변화됩니다. 

toggle에서는 버튼이 왼쪽으로 되어 있으나
클릭시 IOS처럼 오른쪽으로 이동하여 활성화된 색상으로 변합니다. 

