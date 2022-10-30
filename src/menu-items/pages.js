// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: '',
  type: 'tree',
  name: '그룹이름',
  children: [
    {
      id: '1',
      name: '샘플 관리',
      children: [
        {
          id: '1-1',
          name: '샘플',
          children: [
            {
              id: '1-1-1',
              name: '샘플 통합 검색'
            },
            {
              id: '1-1-2',
              name: '샘플등록'
            },
            {
              id: '1-1-3',
              name: '샘플위치관리'
            },
            {
              id: '1-1-4',
              name: '샘플사용취소'
            }
          ]
        },
        {
          id: '1-2',
          name: '박스관리'
        }
      ]
    },
    {
      id: '3',
      name: '재고 관리',
      children: [
        {
          id: '3-1',
          name: '품목 관리'
        },
        {
          id: '3-2',
          name: '재고 현황'
        },
        {
          id: '3-3',
          name: '제품 사용 화면'
        }
      ]
    },
    {
      id: '4',
      name: '폐기',
      children: [
        {
          id: '4-1',
          name: '사용 물질 폐기'
        },
        {
          id: '4-2',
          name: '폐기함 설정'
        },
        {
          id: '4-3',
          name: '폐기 화합 물질 수거'
        },
        {
          id: '4-4',
          name: '사용 폐기 이력'
        },
      ]
    },
    {
      id: '5',
      name: '점검표',
      children: [
        {
          id: '5-1',
          name: '점검표(작성, 출력)'
        },
        {
          id: '5-2',
          name: '점검표 양식관리'
        },
      ]
    },
    {
      id: '6',
      name: '관리',
      children: [
        {
          id: '6-1',
          name: '공통코드'
        },
        {
          id: '6-2',
          name: '사용자 관리'
        },
        {
          id: '6-3',
          name: '구륩 사용자 관리'
        },
        {
          id: '6-4',
          name: '권한'
        },
        {
          id: '6-5',
          name: '보관할 관리'
        },
        {
          id: '6-6',
          name: '보관 장소 설정'
        },
        {
          id: '6-7',
          name: '화학 제품 정보 관리'
        },
        {
          id: '6-8',
          name: '박스 타입 설정 화면'
        },
        {
          id: '6-9',
          name: '단위 설정 화면'
        },
        {
          id: '6-10',
          name: '회사 정보 관리'
        },
      ]
    },
    {
      id: '7',
      name: '통계',
      children: [
        {
          id: '7-1',
          name: '대시보드'
        },
        {
          id: '7-2',
          name: '사용 이력 조회'
        },
        {
          id: '7-3',
          name: '사용량 통계'
        },
      ]
    },
    {
      id: '8',
      name: '공통 기능',
      children: [
        {
          id: '8-1',
          name: '라벨 프린터 설정'
        },
        {
          id: '8-2',
          name: '공지사항 관리'
        },
        {
          id: '8-3',
          name: '사용자 정보 변경'
        },
      ]
    }
  ]
};

export default pages;
