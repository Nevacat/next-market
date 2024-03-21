# MARKET
> nextjs14 app route를 이용한 중고마켓 프로젝트 입니다.

- 개발 시간 단축 및 비용 절감을 위해 Nextjs의 App-server를 통해 serverless restAPI를 구현하였습니다.
- **next auth**를 통한 session 인증방식으로 로그인과 로그아웃이 구현되어 있습니다. (sessionToken은 JWT방식으로 1시간의 유효기간을 갖습니다.)
- **react-kakao-maps-sdk**을 이용하여 사용자가 판매하는 위치를 지도로 표시합니다.
- 제품 페이지는 **pagination** 방식으로 구현되어 있습니다.
- 이미지 저장소는 **Cloudinary**를 사용하고 있습니다.
- 해당 프로젝트는 **PrismaORM**과 **Postgresql**을 기반으로 DB가 구축되어 있으며 **네이버 클라우드 플랫폼**을 통해 관리됩니다. (비용적인 문제로 DB가 비활성화 될 수 있습니다.)
- 채팅은 **polling** 방식을 이용하여 구현하였습니다. (비용적인 문제로 비활성화되어 있습니다.)


![logoImage](https://github.com/Nevacat/next-market/assets/110139098/58a97dec-cfc8-4843-9234-d61f4245120f)


## 아키텍처
![image](https://github.com/Nevacat/next-market/assets/110139098/f1a9acba-de10-465c-b07f-ef598c4d419e)



## 프로젝트 살펴보기

### 메인 (제품 필터링 및 페이지네이션)

![Animation](https://github.com/Nevacat/next-market/assets/110139098/f2056f75-59cf-43cd-b9e8-89a58fe5a2d1) | ![Animation1](https://github.com/Nevacat/next-market/assets/110139098/1ae24bb8-9b5f-4a08-b1e9-b32d7925c73b)
---|---|

---

### 회원가입

![Animation3](https://github.com/Nevacat/next-market/assets/110139098/2d09ba56-53f0-47a0-86e9-6c2613bc682a) | ![Animation8](https://github.com/Nevacat/next-market/assets/110139098/8d798d47-d872-404d-9a96-029a99bf8d33)
---|---|

---

### 로그인 (next-auth를 통한 인증방식)

![Animation4](https://github.com/Nevacat/next-market/assets/110139098/c38c2ff4-f8ee-45fe-8807-6a125850fbc5) | ![Animation9](https://github.com/Nevacat/next-market/assets/110139098/75771ba0-1249-4861-b06f-5af36ffb5cf6)
---|---|

---

### 제품 등록 (Cloudinary 및 카카오맵 사용)

![Animation2](https://github.com/Nevacat/next-market/assets/110139098/854c4007-6c79-4e53-ba35-fd09fbb41a22) | ![Animation7](https://github.com/Nevacat/next-market/assets/110139098/f5cc611d-b965-46a5-aa49-1a480b2bd819)
---|---|

---

### 제품 상세 (내가 등록한 제품은 채팅 버튼이 보이지 않습니다.)

![Animation5](https://github.com/Nevacat/next-market/assets/110139098/92358a7e-5f6e-46ce-b8c1-693595722c4f) | ![Animation10](https://github.com/Nevacat/next-market/assets/110139098/626bd14a-9a3b-4c76-a785-e0ea94b8fa5f)
---|---|

---

### 채팅 (쉽고 빠른 Polling 방식)

![Animation6](https://github.com/Nevacat/next-market/assets/110139098/b1a7b91c-093d-458b-8358-d95cdcfec18f)

---


## 개발 환경 설정

Dokcer, Postgresql 설치
kakao Developer APP key 생성
cloudinary 가입

yarn

```sh
yarn 
yarn init
```

docker

```sh
docker compose up //도커허브에서 postgresql 이미지 불러오기
```

prisma & postgresql
```
npx prisma generate // 로컬 DB 생성
npx prisma db push // 로컬 DB 스키마 작성
```



## 정보

박희수 – nevacattery217@naver.com / crescendo3658@gmail.com
