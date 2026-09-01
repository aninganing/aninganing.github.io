export interface ProfileInfo {
  name: string
  title: string
  email: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface CareerEntry {
  company: string
  companyNote?: string
  period: string
  durationMonths: number
  role: string
  description: string
  achievements: string[]
}

export interface ProjectBullet {
  label?: string
  text: string
}

export interface ProjectSubGroup {
  title: string
  bullets: ProjectBullet[]
}

export interface ProjectEntry {
  id: string
  title: string
  company: string
  period: string
  description: string
  subGroups: ProjectSubGroup[]
}

export interface EducationEntry {
  school: string
  period: string
  detail: string
}

export interface ActivityEntry {
  title: string
  company: string
  period: string
  bullets: string[]
}

export interface PortfolioLink {
  label: string
  url: string
}

export interface CareerStats {
  companyChanges: number
}

export interface ResumeData {
  profile: ProfileInfo
  stats: CareerStats
  intro: string[]
  skills: SkillCategory[]
  career: CareerEntry[]
  projects: ProjectEntry[]
  education: EducationEntry[]
  activities: ActivityEntry[]
  portfolio: PortfolioLink[]
}

export function getTotalCareerMonths(career: CareerEntry[]): number {
  return career.reduce((sum, entry) => sum + entry.durationMonths, 0)
}

export function formatCareerDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  if (years && months) return `${years}년 ${months}개월`
  if (years) return `${years}년`
  return `${months}개월`
}

export const resumeData: ResumeData = {
  profile: {
    name: "김안나",
    title: "프론트엔드 개발자",
    email: "annaing.dev@gmail.com",
  },

  stats: {
    companyChanges: 2,
  },

  intro: [
    "안녕하세요. 사용자 경험을 개선하는 것은 물론, 유지보수성과 개발 생산성까지 함께 고민하는 프론트엔드 개발자 김안나입니다.",
    "React와 TypeScript를 기반으로 레저·숙박 서비스와 해외 B2C 물류 서비스에서 신규 기능 개발, 서비스 리뉴얼, 운영 어드민 구축 및 유지보수를 경험했습니다. 단순히 요구사항을 구현하는 데 그치지 않고, 복잡한 비즈니스 로직을 구조적으로 분리하고 테스트 환경을 구축하여 유지보수성과 확장성을 높이는 데 집중해 왔습니다.",
    "최근에는 1,000줄 이상으로 비대해진 Hook 구조를 Orchestrator Hook 기반으로 재설계하고, 프로젝트 최초의 Vitest 테스트 환경을 구축하여 안정적인 리팩토링 기반을 마련했습니다. 또한 코드 리뷰 병목 문제를 해결하기 위해 LLM 기반 GitLab 코드 리뷰어 봇을 기획·구현하고, Jest·Storybook·Vitest를 도입하여 팀의 개발 품질과 생산성 향상에 기여했습니다.",
    "i18n 기반 글로벌 서비스를 운영하며 해외 사용자를 고려한 기능 개발 경험도 쌓았으며, 기술적 개선과 지식 공유가 팀의 지속적인 성장으로 이어진다고 믿습니다. 앞으로도 더 나은 사용자 경험과 개발 문화를 함께 만들어가는 개발자가 되고자 합니다.",
  ],

  skills: [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      title: "State Management & Data Fetching",
      skills: ["TanStack Query", "Redux", "Zustand"],
    },
    { title: "Testing & Quality", skills: ["Vitest", "Jest", "Storybook"] },
    { title: "Styling", skills: ["Tailwind CSS", "Styled-Components"] },
    { title: "Globalization", skills: ["react-i18next (i18n)"] },
    { title: "Tools", skills: ["Git"] },
  ],

  career: [
    {
      company: "(주) 에스티엘",
      period: "2026. 04. ~ 2026. 08. (5개월)",
      durationMonths: 5,
      role: "솔루션혁신팀 · 주임",
      description:
        "해외 B2C 물류 서비스의 운영과 신규 기능 개발을 담당하며, 서비스 구조 개선과 개발 생산성 향상에 집중했습니다.",
      achievements: [
        "1,000줄 이상으로 비대해진 Hook 구조를 Orchestrator Hook 기반으로 재설계하여 유지보수성 확보",
        "프로젝트 최초의 Vitest 테스트 환경을 구축하고 팀 내 테스트 문화 정착",
        "react-i18next 기반 다국어 서비스 운영 및 신규 기능 개발",
      ],
    },
    {
      company: "주식회사 웅진컴퍼스",
      period: "2024. 12. ~ 2025. 10. (11개월)",
      durationMonths: 11,
      role: "DX 개발실 · 대리 · 정규직",
      description:
        "레저·숙박 서비스 운영과 개발 생산성 개선 프로젝트를 담당했습니다.",
      achievements: [
        "LLM 기반 GitLab MR 코드 리뷰어 봇을 기획·구현하여 코드 리뷰 프로세스 자동화",
        "숙박 운영 어드민 UI/UX 개선 및 공용 컴포넌트 리팩토링",
        "웹 Amplitude 이벤트 체계 정비 및 데이터 정합성 개선",
      ],
    },
    {
      company: "(주)놀이의발견",
      companyNote: "(합병 → 주식회사 웅진컴퍼스)",
      period: "2022. 09. ~ 2024. 12. (2년 4개월)",
      durationMonths: 28,
      role: "플랫폼팀 프론트엔드 파트 · 매니저",
      description:
        "레저·숙박 웹 서비스와 운영 어드민을 개발하며 공통 아키텍처 설계, 테스트 문화 도입, 서비스 안정성 향상을 이끌었습니다.",
      achievements: [
        "Jest·Storybook 기반 테스트 및 UI 검증 환경 구축",
        "숙박 웹 서비스 리뉴얼을 주도하며 공용 컴포넌트·디자인 토큰 설계",
        "숙박 운영 어드민 신규 구축 및 구조 개선",
        "Amplitude 기반 데이터 트래킹 체계 정비",
        "서비스 영향 없이 웹 스토어 기능 안전 철수",
      ],
    },
  ],

  projects: [
    {
      id: "stl-b2c-logistics",
      title: "해외 B2C 물류 서비스 운영 및 구조 개선",
      company: "(주) 에스티엘",
      period: "2026. 04. ~ 2026. 08. (5개월)",
      description:
        "해외 B2C 물류 서비스의 운영 및 신규 기능 개발 과정에서 1,000줄 이상으로 비대해진 Hook 구조를 재설계하고, 프로젝트 최초의 테스트 환경을 구축하여 유지보수성과 개발 생산성을 향상.",
      subGroups: [
        {
          title: "[Hook 아키텍처 재설계]",
          bullets: [
            {
              label: "Orchestrator Hook 기반 구조 설계:",
              text: "상태 관리, API 호출, 권한 처리 등 다양한 비즈니스 로직이 하나의 use[Menu].ts(1,000줄 이상)에 집중되어 있던 구조를 분석하고, Orchestrator Hook과 역할별 Sub Hook(3~7개)으로 책임을 분리하는 아키텍처를 설계 및 적용.",
            },
            {
              label: "팀 공통 아키텍처 정립:",
              text: "공통 실행 흐름은 Orchestrator Hook에서 관리하고 기능별 비즈니스 로직은 독립적인 Sub Hook으로 분리. 설계 원칙을 문서화하여 팀 내에 공유하고 이후 신규 메뉴 개발에도 동일한 구조를 적용할 수 있는 기준을 마련.",
            },
          ],
        },
        {
          title: "[테스트 기반 품질 검증 환경 구축]",
          bullets: [
            {
              label: "Vitest 기반 테스트 환경 구축:",
              text: "프로젝트 최초로 Vitest 기반 테스트 환경을 구축하고, Sub Hook 및 핵심 비즈니스 로직을 중심으로 테스트 코드를 작성하여 리팩토링 이후에도 기존 동작을 안정적으로 검증할 수 있는 환경을 마련.",
            },
            {
              label: "테스트 문화 확산:",
              text: "테스트 작성 기준과 예제를 팀 내에 공유하여 프로젝트 전반에 테스트 코드 작성 문화를 정착시키고, 프로젝트 전체 테스트 커버리지를 90% 이상까지 향상하여 리팩토링 안정성을 확보.",
            },
          ],
        },
        {
          title: "[글로벌 서비스 운영]",
          bullets: [
            {
              label: "i18n 기반 다국어 환경 지원:",
              text: "react-i18next 기반 다국어 환경에서 신규 기능 개발 및 운영을 담당하며 국가별 언어 리소스를 고려한 UI를 구현.",
            },
            {
              label: "글로벌 서비스 운영 경험 축적:",
              text: "해외 사용자 대상 서비스 운영 과정에서 다양한 요구사항을 반영하며 다국어 환경의 기능 개발 및 유지보수 경험을 축적.",
            },
          ],
        },
      ],
    },
    {
      id: "gitlab-review-bot",
      title: "LLM 기반 GitLab MR 코드 리뷰어 봇 구현 및 사내 발표",
      company: "주식회사 웅진컴퍼스",
      period: "2025. 08.",
      description:
        "기한이 촉박한 프로젝트 환경에서 코드 리뷰 지연으로 인한 컨벤션 불일치 및 휴먼 에러 누적 문제를 해결하기 위해 LLM 기반의 자동화 리뷰 시스템을 기획·구현.",
      subGroups: [
        {
          title: "[자동화 파이프라인 및 데이터 가공]",
          bullets: [
            {
              label: "GitLab Webhook & API 연동:",
              text: "MR 생성 및 업데이트 이벤트를 감지하는 트리거를 구축하고, GitLab API를 활용해 변경된 코드 데이터(diff)를 실시간으로 수집 및 정제.",
            },
            {
              label: "리뷰 프롬프트 최적화:",
              text: "수집된 코드 프롬프트를 Claude API에 효율적으로 전달하기 위해 사내 코드 컨벤션 규칙을 템플릿화하여 주입, 정확도 높은 품질 분석 환경 구축.",
            },
          ],
        },
        {
          title: "[협업 프로세스 및 리뷰 흐름 개선]",
          bullets: [
            {
              label: "리뷰어 역할 이원화:",
              text: "AI가 단순 오타, 컨벤션 위반, 잠재적 오류 등 1차 품질 검증을 전담하도록 프로세스를 재정의하여, 팀원들이 비즈니스 로직과 구조 중심의 고차원 리뷰에만 집중할 수 있도록 피로도 분산.",
            },
            {
              label: "사내 기술 전파:",
              text: "구현 사례와 생산성 개선 효과를 사내 세미나에서 발표하여 조직 내 AI 기반 개발 프로세스 도입 및 자동화 문화 확산 기여.",
            },
          ],
        },
      ],
    },
    {
      id: "jest-storybook-quality",
      title: "개발 생산성 및 품질 개선 (Jest, Storybook 도입)",
      company: "(주)놀이의발견",
      period: "2024. 07. ~ 2025. 09.",
      description:
        "프로젝트 규모 확장에 따라 리팩토링 시 안정성 검증이 어렵고, UI 마이너 변경 건에 대해 반복적인 수작업 코드 수정 검증이 발생하는 비효율을 제거하기 위해 테스트 및 UI 검증 자동화 환경을 구축.",
      subGroups: [
        {
          title: "[테스트 자동화를 통한 회귀 버그 방지]",
          bullets: [
            {
              label: "Jest & Testing Library 기반 환경 구축:",
              text: "테스트 작성 기준 및 팀 컨벤션을 수립하여 공유함으로써 팀 내 테스트 코드 진입 장벽 완화.",
            },
            {
              label: "핵심 로직 중심의 테스트 커버리지 확장:",
              text: "버그가 빈번하던 엣지 케이스 및 핵심 비즈니스 로직에 테스트 코드를 선제 적용하여 잔존 버그를 식별 및 수정하고, 이후 유틸 함수와 공용 컴포넌트 전반으로 범위를 넓혀 리팩토링 안정성 확보.",
            },
          ],
        },
        {
          title: "[Storybook 중심의 Cross-functional 협업 구축]",
          bullets: [
            {
              label: "독립적 UI 검증 컴포넌트 설계:",
              text: "공용 컴포넌트를 비즈니스 로직과 격리하여 독립적으로 테스트할 수 있는 Storybook 환경 구축.",
            },
            {
              label: "요구사항 중심의 스토리 정의:",
              text: "말줄임 처리, 뱃지 텍스트 길이 제한 등 디자인/기획 예외 케이스를 스토리 단위로 등록하여 코드 수정 없는 즉각적 검증 구현.",
            },
            {
              label: "협업 비용 최소화:",
              text: "기획자, 디자이너 등 유관 부서가 개발자 의존 없이 웹에서 공용 컴포넌트의 상태를 직접 확인하고 피드백할 수 있는 프로세스를 마련하여 전반적인 개발 생산성 향상.",
            },
          ],
        },
      ],
    },
    {
      id: "lodging-renewal",
      title: "놀이의발견 웹 숙박 서비스 리뉴얼 오픈 및 운영",
      company: "(주)놀이의발견",
      period: "2024. 07. ~ 2025. 09.",
      description:
        "기존 레저 중심의 웹 서비스를 숙박 영역까지 확장하기 위해 진행된 전체 리뉴얼 프로젝트로, 공용 UI 설계부터 접근성 개선, 안정성 확보까지 프론트엔드 전반을 담당.",
      subGroups: [
        {
          title: "[Compound Pattern 기반의 확장성 있는 UI 설계]",
          bullets: [
            {
              label: "핵심 UI 컴포넌트 표준화:",
              text: "버튼 등 아토믹 단위부터 리뷰 시스템, 캘린더 등 숙박 핵심 컴포넌트를 설계 및 구현.",
            },
            {
              label: "디자인 패턴 적용:",
              text: "Compound Pattern을 도입하여 컴포넌트 내 비즈니스 로직과 스타일을 분리, 잦은 기획 변경 및 다양한 요구사항에 유연하게 대응할 수 있는 구조 구축.",
            },
          ],
        },
        {
          title: "[디자인 시스템 구축 및 UI/UX 표준화]",
          bullets: [
            {
              label: "디자인 토큰화 수립:",
              text: "서비스 내에서 산발적으로 사용되던 폰트와 컬러 에셋을 전수 조사하고, 이를 공통 공용 디자인 세트로 정립 및 토큰화하여 UI 변경 요청 시 코드를 일괄 반영할 수 있는 구조 마련.",
            },
            {
              label: "크로스 플랫폼 UI/UX 통일:",
              text: "앱(App) 환경과 웹(Web) 환경 간에 상이하게 동작하던 비즈니스 로직과 화면 구성을 전수 분석하고, 앱 파트와의 긴밀한 협업을 통해 인터랙션 및 동작 기준을 통일하여 플랫폼 간 사용성 불일치 해소.",
            },
            {
              label: "컴포넌트 통합 리팩토링:",
              text: "여러 화면에서 중복 구현되어 있던 카드(Card) 등의 UI 요소를 공용 컴포넌트 구조로 통합·정비하여 코드 중복을 최소화하고 UI 확장 효율성 극대화.",
            },
          ],
        },
        {
          title: "[웹 접근성(Web Accessibility) 강화]",
          bullets: [
            {
              label: "시맨틱 마크업 및 ARIA 적용:",
              text: "서비스 리뉴얼 과정에서 스크린 리더 사용자를 고려하여 시맨틱 태그를 재정비하고 ARIA 속성을 정밀하게 적용함으로써 다양한 사용자 환경을 포용하는 UI 구조로 개선.",
            },
          ],
        },
        {
          title: "[시스템 방어 로직 및 유효성 검증]",
          bullets: [
            {
              label: "공용 유틸 재설계:",
              text: "플랫폼 전반에서 활용되는 유틸 함수를 범용적 구조로 재설계하여 코드 중복 제거.",
            },
            {
              label: "악의적 요청 방어:",
              text: "클라이언트 단에서 발생할 수 있는 쿼리 파라미터 조작 등의 예외 케이스를 차단하기 위해 유효성 검사 및 방어 로직을 추가하여 런타임 안정성 강화.",
            },
          ],
        },
      ],
    },
    {
      id: "amplitude-tracking",
      title: "데이터 트래킹 정합성 개선 (웹 레저 및 숙박 Amplitude 연동)",
      company: "주식회사 웅진컴퍼스 / (주)놀이의발견",
      period: "2023. 08. ~ 2025. 09.",
      description:
        "앱 환경 대비 웹에서 사용자 행동 데이터가 일부 누락되거나 수집 기준이 상이하여 분석 지표의 신뢰도가 저하되는 문제를 해결하기 위해 Amplitude 수집 체계를 통합 및 표준화.",
      subGroups: [
        {
          title: "[텍소노미(Taxonomy) 정립]",
          bullets: [
            {
              label: "기획 단계 협업:",
              text: "이벤트 수립 초기부터 기획 부서와 긴밀히 소통하며, 단순 구현을 넘어 추후 분석 목적에 부합하는 핵심 지표 기준 및 텍소노미 정의를 주도적으로 리드.",
            },
            {
              label: "구매 여정 전반 트래킹:",
              text: "레저 및 숙박 상품의 탐색부터 상세 조회, 최종 결제 완료까지의 핵심 퍼널을 기준으로 누락된 이벤트를 재정의하고 웹 환경에 추가 연동하여 앱-웹 간 데이터 수집 범위 일치.",
            },
          ],
        },
        {
          title: "[이벤트 호출 로직 모듈화 및 결합도 최소화]",
          bullets: [
            {
              label: "독립적 모듈 구조 설계:",
              text: "비즈니스 로직 코드 내에 파편화되어 있던 이벤트 추적 코드를 분리하여 별도 함수로 모듈화.",
            },
            {
              label: "타입 안정성 확보:",
              text: "이벤트 타입을 명시적으로 선언 및 관리하여, 향후 신규 이벤트 추가나 마이너 변경 시 기존 비즈니스 로직에 미치는 영향을 최소화하고 유지보수성 극대화.",
            },
          ],
        },
      ],
    },
    {
      id: "lodging-admin",
      title: "숙박 운영 어드민 프로젝트 구축 및 고도화",
      company: "주식회사 웅진컴퍼스 / (주)놀이의발견",
      period: "2023. 08. ~ 2025. 09.",
      description:
        "신규 숙박 서비스 오픈 및 안정적 운영 지원을 위한 백오피스 시스템을 구축하고, 이후 현업 파트의 개선 제안을 분석하여 가독성과 컴포넌트 구조를 고도화한 프로젝트.",
      subGroups: [
        {
          title: "[초기 아키텍처 세팅 및 공용 컴포넌트 구축]",
          bullets: [
            {
              label: "확장성 고려한 토대 마련:",
              text: "개발 초기 환경 세팅 및 전반적인 프로젝트 폴더 구조 설계를 주도하여 향후 기능 확장이 용이한 베이스라인 구축.",
            },
            {
              label: "네이티브 기반 UI 컴포넌트 구현:",
              text: "페이지네이션, 데이트피커, 인풋 등 어드민에서 공통으로 쓰이는 UI를 네이티브 엘리먼트와 유사한 동작 방식을 기준으로 설계하여 일관된 입력 처리와 안정성 확보.",
            },
          ],
        },
        {
          title: "[도메인 비즈니스 로직 분리 및 UI/UX 리팩토링]",
          bullets: [
            {
              label: "책임의 분리:",
              text: "공용 UI 컴포넌트 내부에 혼재되어 결합도를 높이던 비즈니스 로직을 유틸 함수로 완전히 격리 및 리팩토링하여 컴포넌트의 순수성과 재사용성 강화.",
            },
            {
              label: "운영 효율 중심의 화면 개편:",
              text: "업체·예약 관리 등 주요 업무 화면의 정보 배치를 가독성 높게 조정하고 반복 작업 동선을 단순화하여 운영 파트의 백오피스 사용성 개선.",
            },
          ],
        },
      ],
    },
    {
      id: "webstore-removal",
      title: "웹 스토어 기능 철수 및 안정화",
      company: "(주)놀이의발견",
      period: "2023. 01. ~ 2023. 02.",
      description:
        "기존에 운영 중이던 웹 스토어 서비스 중단 결정에 따라, 활성화된 타 서비스(레저, 숙박 등)에 사이드 이펙트를 주지 않고 안전하게 코드를 분리·제거하는 작업을 단독 수행.",
      subGroups: [
        {
          title: "[의존성 분석 기반 리스크 관리]",
          bullets: [
            {
              label: "장애 시나리오 사전 정의:",
              text: "작업 착수 전 스토어 기능과 결합해 있는 공통 모듈 및 타 서비스 간의 연관 관계를 전수 분석하고, 철수 과정에서 발생 가능한 장애 예외 케이스를 구체적으로 문서화하여 리스크 최소화.",
            },
            {
              label: "점진적·단계적 코드 분리:",
              text: "한 번에 대규모 코드를 삭제하는 방식 대신, 기능 의존성이 높은 영역부터 결합도를 점진적으로 끊어내며 순차적으로 제거하는 안전한 배포 전략 설계.",
            },
            {
              text: "라이브 서비스 중인 레저 및 숙박 서비스에 단 한 건의 장애 영향도 주지 않고 기존 운영 서비스 안정성 100% 유지하며 기능 철수 완수.",
            },
          ],
        },
      ],
    },
  ],

  education: [
    {
      school: "건국대학교(글로컬)",
      period: "2016. 03. ~ 2021. 02.",
      detail: "졸업 · 학사 · 컴퓨터공학과",
    },
  ],

  activities: [
    {
      title: "사내 세미나 발표",
      company: "주식회사 웅진컴퍼스",
      period: "2025.08",
      bullets: [
        "LLM 기반 GitLab MR 코드 리뷰어 봇 도입 및 생산성 개선 사례 발표",
      ],
    },
  ],

  portfolio: [
    { label: "Github", url: "https://github.com/aninganing" },
    { label: "기술 블로그", url: "https://aninganing.github.io/" },
  ],
}
