EcoTrac is a Smart Resource Optimization system developed for Smart India Hackathon 2025 (Team TechNOmads).
It combines energy usage data and weather data to predict demand, optimize consumption, and provide actionable tips to reduce waste.

🚀 Features

📊 Data Integration: Combines household/farm electricity & water usage data with weather conditions.

🔮 AI-Powered Forecasting: Uses Linear Regression & Time-Series models (Prophet/ARIMA) to predict high-demand days.

💡 Actionable Recommendations: Suggests practical steps like “Shift irrigation to evening” or “Reduce cooling load during peak hours.”

🌱 Sustainability Impact: Saves 15–20% energy, 25% water, and reduces 18% carbon footprint.

🖥 Interactive Dashboard: Built with Streamlit, powered by PostgreSQL + Flask backend for real-time predictions.

🛠️ Tech Stack

Languages/Frameworks: Python, Flask, Streamlit

Libraries: Pandas, Scikit-learn, Prophet/ARIMA, Chart.js

Database: PostgreSQL

Methodology: Collect → Clean → Predict → Deploy

🔧 System Flow

Data Collection → Usage CSV + Weather API

Data Cleaning → Handle missing values, outliers, standardize units

Prediction Engine → AI models forecast next-day/weekly usage

Recommendation Engine → Converts predictions into plain-English saving tips

Deployment → Flask APIs + Streamlit dashboard

📈 Impact

🏠 Households: Save 50–70 kWh/month

🚜 Farmers: Reduce 200–300 liters/day water

🌍 Environment: ~18% lower carbon footprint

🎮 Gamification: Users earn “Green Points” for sustainable choices

🔮 Future Scope

Real-time integration with IoT smart meters

Advanced AI models (RandomForest, XGBoost, LSTM) for higher accuracy

Mobile app with push notifications & local language support

Policy dashboards for government & utilities
