## Thought Process

1. Set up a Vite - React + TypeScript project and began with Google Authentication. Used https://www.npmjs.com/package/@react-oauth/google package to implement Google SSO in the project and store the user in local storage.

2. Utilised context for the user across the application. Similarly, created context for the theme to maintain light and dark mode themes across the application.

3. Once Google Authentication was implemented, I brainstormed on the design and features of the application. These were the final features I’ve implemented:
  - Total Monthly Consumption
  - Total Monthly Savings
  - Annual aggregated Carbon Footprint
  - Breakdown of Energy Sources
  - Real time graph between Energy Consumption & Savings for a given timestamp. 

4. Began structuring the project and implementing each feature step by step. Used Recharts (https://recharts.org/en-US/examples) to display animated charts. At first, I implemented the line charts for Total Consumptions and Total Savings. Then, moved on to Pie Chart and Bar Graph.

5. Implemented the real-time graph and maintained a state that would update the data points in the graph by making an API call every 30 seconds. Here, I’ve hard coded the initial data for the graph. Ideally, an API call can be made to get the initial data according to the current timestamp.

6. I've used MSW (https://mswjs.io/docs/getting-started) to mock the data API given to me.

7. There is a transition when the graph updates and for every new update, the new data points show a pulsating effect. I used framer-motion to integrate animations throughout the application.

8. Further integrated react-joyride for a seamless user onboarding experience. I defined the major features of the application and integrated the tour. Worked on displaying a message before and on successfully completing the tour.

9. Finally, worked on the Welcome animation which needs to be displayed when the user first sees the dashboard.

## Instructions to run the application

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **Yarn** (v1.x or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AishwaryaParab/react-user-dashboard
   cd react-user-dashboard

2. **Install the dependencies:**

   If you're using npm:
   ```
   npm install
   ```

   Or if you're using yarn:
   ```
   yarn install
   ```

3. **Running the application:**
   ```
   npm run dev
   ```

   OR 

   ```
   yarn dev
   ```

   This will start the Vite development server. Open your browser and navigate to http://localhost:5173/. You should see your React application running.
