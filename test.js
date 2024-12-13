
const questions = [
    {
        question: '미술 시간에 그림 그리거나, PPT 디자인을 꾸미는 걸 즐기거나 잘한다고 생각하나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'프론트엔드 개발': 2, 'UI/UX 디자인': 2, '그래픽스 프로그래밍': 1},
            No: {'백엔드 개발': 1, '데이터 과학': 1}
        }
    },
    {
        question: '숫자나 데이터를 가지고 무언가를 분석하거나, 통계를 내는 걸 좋아하나요? 예를 들어, 친구들 사이에서 설문조사를 하고 결과를 정리하는 걸 즐기나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'데이터 과학': 2, '비즈니스 인텔리전스': 2, '인공지능 개발': 1},
            No: {'프론트엔드 개발': 1, '게임 개발': 1}
        }
    },
    {
        question: '게임을 하다가 "내가 이런 게임을 만들면 더 재밌게 만들 텐데!"라는 생각을 해본 적이 있나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'게임 개발': 2, '그래픽스 프로그래밍': 1, 'VR/AR 개발': 1},
            No: {'웹 개발': 1, '모바일 앱 개발': 1}
        }
    },
    {
        question: '영화 속 인공지능 로봇(예: 아이언맨의 자비스)처럼 똑똑한 시스템을 만들어보고 싶다는 생각이 드나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'인공지능 개발': 2, '자연어 처리': 2, '머신러닝': 1},
            No: {'웹 개발': 1, '데이터베이스 관리': 1}
        }
    },
    {
        question: '인터넷에서 사진이나 파일을 저장하고 어디서든 꺼내 쓸 수 있는 시스템(예: 구글 드라이브)을 만들어보고 싶나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'클라우드 컴퓨팅': 2, '백엔드 개발': 1, '데이터베이스 관리': 1},
            No: {'임베디드 시스템': 1, '네트워크 엔지니어링': 1}
        }
    },
    {
        question: '영화 속 해커처럼 시스템을 보호하거나, 누군가의 공격을 막는 역할이 멋지다고 생각하나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'사이버 보안': 2, '네트워크 엔지니어링': 1, '시스템 프로그래밍': 1},
            No: {'웹 개발': 1, '모바일 앱 개발': 1}
        }
    },
    {
        question: '"포켓몬 GO"처럼 현실과 가상세계를 결합한 기술에 흥미가 있나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'VR/AR 개발': 2, '모바일 앱 개발': 1, '게임 개발': 1},
            No: {'웹 개발': 1, '데이터베이스 관리': 1}
        }
    },
    {
        question: '비트코인 같은 암호화폐나 블록체인 기술이 흥미롭다고 느껴지나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'블록체인 개발': 2, '암호학': 1, '핀테크 개발': 1},
            No: {'웹 개발': 1, '데이터베이스 관리': 1}
        }
    },
    {
        question: '컴퓨터가 반복적으로 해야 하는 일을 대신해주는 프로그램(예: 엑셀 매크로)을 만들어보고 싶다고 생각한 적이 있나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'RPA': 2, '스크립팅': 1, '자동화 테스트': 1},
            No: {'웹 개발': 1, 'UI/UX 디자인': 1}
        }
    },
    {
        question: '"시리"나 "구글 어시스턴트"처럼 말을 알아듣고 대답하는 프로그램을 만들어보고 싶다고 생각하나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'자연어 처리': 2, '인공지능 개발': 1, '음성 인식': 1},
            No: {'웹 개발': 1, '데이터베이스 관리': 1}
        }
    },
    {
        question: '"혼자서 웹사이트나 앱 전체를 만들 수 있다면 멋질 것 같다"고 생각하신 적이 있나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'풀스택 개발': 2, '프론트엔드 개발': 1, '백엔드 개발': 1},
            No: {'데이터 과학': 1, '시스템 프로그래밍': 1}
        }
    },
    {
        question: '"유튜브 추천 영상"이나 "넷플릭스 추천 영화"처럼 사람들에게 딱 맞는 것을 추천해주는 프로그램이 흥미롭다고 생각하나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'추천 시스템': 2, '머신러닝': 1, '데이터 과학': 1},
            No: {'웹 개발': 1, '네트워크 엔지니어링': 1}
        }
    },
    {
        question: '"카카오페이"나 "토스" 같은 서비스처럼 돈 관리와 결제를 더 편리하게 만드는 프로그램이 흥미롭다고 느껴지나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'핀테크 개발': 2, '모바일 앱 개발': 1, '보안 프로그래밍': 1},
            No: {'데이터 과학': 1, '시스템 프로그래밍': 1}
        }
    },
    {
        question: '"픽사 애니메이션"이나 "3D 게임 그래픽"처럼 멋진 시각 효과를 만들어보고 싶다는 생각이 드시나요?',
        answers: ['Yes', 'No'],
        fields: {
            Yes: {'그래픽스 프로그래밍': 2, '게임 개발': 1, 'VR/AR 개발': 1},
            No: {'백엔드 개발': 1, '데이터베이스 관리': 1}
        }
    }
];

const recommendations = {
    '프론트엔드 개발': 'HTML, CSS, JavaScript, React 또는 Vue.js를 학습하세요. 웹 디자인 원칙과 반응형 웹 개발에 대해 공부하면 좋습니다.',
    '백엔드 개발': 'Python(Django/Flask), Node.js, 또는 Java(Spring)를 배우세요. 데이터베이스 설계와 API 개발에 대해 학습하세요.',
    '데이터 과학': 'Python, R, pandas, NumPy, scikit-learn을 공부하세요. 통계학과 머신러닝 기초도 함께 학습하면 좋습니다.',
    '인공지능 개발': 'Python, TensorFlow 또는 PyTorch를 배우고, 머신러닝과 딥러닝 알고리즘을 학습하세요.',
    '게임 개발': 'Unity(C#) 또는 Unreal Engine(C++)을 선택해 학습하세요. 3D 모델링과 게임 물리에 대해서도 공부하면 좋습니다.',
    'VR/AR 개발': 'Unity나 Unreal Engine을 배우고, ARKit(iOS) 또는 ARCore(Android)를 학습하세요.',
    '클라우드 컴퓨팅': 'AWS, Azure, 또는 Google Cloud Platform을 배우고, Docker와 Kubernetes도 학습하세요.',
    '사이버 보안': '네트워크 기초, 암호학, 윤리적 해킹 기술을 배우세요. Python과 리눅스 사용법도 익히면 좋습니다.',
    '블록체인 개발': 'Solidity를 배우고 이더리움 기반의 스마트 컨트랙트 개발을 학습하세요. 암호학 기초도 중요합니다.',
    'RPA': 'UiPath나 Automation Anywhere 같은 RPA 도구를 배우고, Python이나 VBA로 스크립팅을 연습하세요.',
    '자연어 처리': 'Python과 NLTK, spaCy, transformers 라이브러리를 학습하세요. 언어학 기초도 공부하면 좋습니다.',
    '풀스택 개발': '프론트엔드(HTML, CSS, JavaScript)와 백엔드(Node.js, Python 등) 기술을 모두 학습하세요. 데이터베이스와 API 개발도 중요합니다.',
    '추천 시스템': 'Python으로 협업 필터링과 콘텐츠 기반 필터링 알고리즘을 구현해보세요. 머신러닝 기초도 함께 학습하세요.',
    '핀테크 개발': '웹/앱 개발 기술과 함께 결제 시스템 통합, 보안 프로토콜, 금융 규제에 대해 학습하세요.',
    '그래픽스 프로그래밍': 'OpenGL이나 DirectX를 배우고, 선형 대수학과 컴퓨터 그래픽스 이론을 학습하세요.',
    'UI/UX 디자인': 'Figma나 Sketch를 배우고, 사용자 중심 디자인 원칙과 프로토타이핑 기법을 학습하세요.',
    '시스템 프로그래밍': 'C/C++를 깊이 있게 배우고, 운영체제 이론과 컴퓨터 구조에 대해 학습하세요.',
    '네트워크 엔지니어링': 'TCP/IP 프로토콜을 깊이 있게 공부하고, Cisco나 Juniper 네트워크 장비 운영 기술을 익히세요.',
    '임베디드 시스템': 'C/C++와 마이크로컨트롤러 프로그래밍을 배우고, 실시간 운영체제(RTOS)에 대해 학습하세요.',
    '데이터베이스 관리': 'SQL을 깊이 있게 배우고, Oracle, MySQL, PostgreSQL 중 하나를 선택해 관리 기술을 익히세요.',
    '모바일 앱 개발': 'iOS(Swift) 또는 Android(Kotlin) 개발을 배우거나, React Native나 Flutter로 크로스 플랫폼 개발을 학습하세요.',
    '자동화 테스트': 'Selenium, Appium 같은 도구를 배우고, 테스트 자동화 프레임워크 구축 방법을 학습하세요.',
    '암호학': '수학(특히 정수론)을 공부하고, 현대 암호 알고리즘과 암호 프로토콜에 대해 학습하세요.',
    '비즈니스 인텔리전스': 'SQL, 데이터 웨어하우징, BI 도구(Tableau, Power BI)를 학습하고, 데이터 시각화 기법을 익히세요.',
    '머신러닝': 'Python, scikit-learn, TensorFlow를 배우고, 통계학과 선형대수학 기초를 학습하세요.',
    '스크립팅': 'Python, Bash, PowerShell 중 하나를 선택해 자동화 스크립트 작성 방법을 배우세요. 정규 표현식과 파일 처리 기술도 익히면 좋습니다.',
    '음성 인식': 'Python과 음성 처리 라이브러리(예: librosa, pydub)를 학습하세요. 신호 처리와 음성학 기초도 공부하면부하면 도움이 됩니다.',
    '보안 프로그래밍': '안전한 코딩 practices를 학습하고, OWASP Top 10 보안 위협에 대해 공부하세요. 암호화 라이브러리 사용법도 익히면 좋습니다.',
};


let currentQuestion = 0;
const userAnswers = [];

function runTest(answers) {
    let fieldScores = {};
    answers.forEach((answer, i) => {
        const question = questions[i];
        const fields = question.fields[answer];
        for (let [field, score] of Object.entries(fields)) {
            if (!(field in fieldScores)) {
                fieldScores[field] = 0;
            }
            fieldScores[field] += score;
        }
    });
    return Object.entries(fieldScores).sort((a, b) => b[1] - a[1]);
}

function getRecommendations(topFields) {
    return topFields.map(([field, score]) => {
        const recommendation = recommendations[field] || "추천 자료가 없습니다.";
        return `${field} (점수: ${score}): ${recommendation}`;
    });
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz');
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <button onclick="answerQuestion('Yes')">Yes</button>
                <button onclick="answerQuestion('No')">No</button>
            </div>
        `;
    } else {
        showResults();
    }
}

function answerQuestion(answer) {
    userAnswers.push(answer);
    currentQuestion++;
    displayQuestion();
}

function showResults() {
    const resultContainer = document.getElementById('result');
    const testResults = runTest(userAnswers);
    const topResults = testResults.slice(0, 3);
    const studyRecommendations = getRecommendations(topResults);

    let resultHTML = "<h2>추천 분야:</h2>";
    studyRecommendations.forEach(recommendation => {
        resultHTML += `<p>${recommendation}</p>`;
    });

    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
}

// 테스트 시작
displayQuestion();

// 테스트용 예제 (필요시 주석 해제하여 사용)
/*
const exampleAnswers = [
    'Yes', 'Yes', 'No', 'Yes', 'No',
    'Yes', 'No', 'Yes', 'Yes', 'No',
    'Yes', 'No', 'Yes', 'Yes'
];
const testResults = runTest(exampleAnswers);
const topResults = testResults.slice(0, 3);
const studyRecommendations = getRecommendations(topResults);
console.log("추천 분야:");
studyRecommendations.forEach(recommendation => {
    console.log(recommendation);
});
*/