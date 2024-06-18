import { PayersPage } from './pages/PayersPage.jsx'
import { Router } from './Router.jsx'
import { OrderSearchProvider } from './context/orderSearch.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import { PayerSearchProvider } from './context/payerSearch.jsx'
import { AppNavbar } from './components/Navbar.jsx'
import { AppFooter } from './components/Footer.jsx'

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
    <main className='flex flex-col min-h-screen'>
      <AppNavbar />
      <PayerSearchProvider>
        <OrderSearchProvider>
          <Router routes={appRoutes} />
        </OrderSearchProvider>
      </PayerSearchProvider>
      <AppFooter />
    </main>
  )
}

export default App
