import './App.css'
import { PayersPage } from './pages/PayersPage.jsx'
import { Router } from './Router.jsx'
import { OrderSearchProvider } from './context/orderSearch.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import { PayerSearchProvider } from './context/payerSearch.jsx'

const appRoutes = [{
  path: '/',
  Component: PayersPage
},
{
  path: '/facturas',
  Component: OrdersPage
}
]

function App () {
  return (
    <main>
      <PayerSearchProvider>
        <OrderSearchProvider>
          <Router routes={appRoutes} />
        </OrderSearchProvider>
      </PayerSearchProvider>
    </main>
  )
}

export default App
