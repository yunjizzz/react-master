# React JS 마스터 클래스

###  Setup
필요한 패키지 설치
```
 npm i react-router-dom@5.3.0 react-query
 npm i --save-dev @types/react-router-dom
```

 프로젝트 시작
 ```
 npm run start
 ```

#### Endpoint
- / -> All coins
- /:id -> Coin detail

### React Query
캐싱된 데이터를 보려면 App.tsx에 추가
```
 import { ReactQueryDevtools } from 'react-query/devtools'
```

### Charts

[ChartSite](https://apexcharts.com/docs/installation/)

```
npm install --save react-apexcharts apexcharts
```