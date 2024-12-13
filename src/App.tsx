import React from 'react';
import { Calculator, CreditCard, DollarSign, PiggyBank, Wallet } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Debt Freedom Guide</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Your Path to Financial Freedom
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these proven steps to eliminate credit card debt and regain control of your finances.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1: Stop Using Credit Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Stop Using Credit Cards</h3>
            </div>
            <p className="text-gray-600 mb-4">
              The first step is to stop accumulating new debt. Put your credit cards away and switch to cash or debit cards for daily expenses.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Cut up or freeze your credit cards
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Remove saved card info from online stores
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Create a cash-only budget
              </li>
            </ul>
          </div>

          {/* Step 2: List All Debts */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">List All Debts</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Create a comprehensive list of all your credit card debts, including balances, interest rates, and minimum payments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Gather all credit card statements
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Note interest rates and balances
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Calculate total debt amount
              </li>
            </ul>
          </div>

          {/* Step 3: Create a Budget */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Create a Budget</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Develop a realistic budget that maximizes the amount you can put toward debt repayment each month.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Track all income sources
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                List essential expenses
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Find areas to cut spending
              </li>
            </ul>
          </div>

          {/* Step 4: Choose a Repayment Strategy */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <PiggyBank className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Choose Repayment Strategy</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Select either the Debt Avalanche (highest interest first) or Debt Snowball (smallest balance first) method.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Evaluate both strategies
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Pick the one that motivates you
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Stick to your chosen method
              </li>
            </ul>
          </div>

          {/* Step 5: Consider Debt Consolidation */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Consider Consolidation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Evaluate whether debt consolidation could help you secure a lower interest rate and simplify payments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Research consolidation options
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Compare interest rates
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                Calculate potential savings
              </li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
                Contact a non-profit credit counseling agency
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
                Consider balance transfer options
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
                Negotiate with creditors for lower rates
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
                Build an emergency fund to avoid new debt
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;