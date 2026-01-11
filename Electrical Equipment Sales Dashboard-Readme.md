Electrical Equipment Sales Dashboard

Project Overview
This project is an interactive Power BI Dashboard for Electrical Equipment Sales. The dashboard provides insights into sales performance, customer behavior, and product profitability from three perspectives:

1.Executive / Product Insights
2.Customer Insights
3.Sales Analysis

It is designed to help stakeholders make data-driven decisions, track KPIs, and analyze trends effectively.

Project Objective
Track Revenue, Profit, Units Sold, and Revenue Achievement for products and categories.
Identify top-performing products and customers.
Provide actionable insights on customer behavior, retention, and lifetime value.
Support forecasting, planning, and performance evaluation.

Data Sources
Orders Table: Contains sales transactions with Revenue, CustomerID, Product, Category, Region, Month.
Customer Table: Customer details for analysis of lifetime value and acquisition.
Date Table: Used for time intelligence and YTD calculations.

Project Flow

1. Data Preparation

Import tables into Power BI.
Clean and transform data using Power Query:
Handle missing values
Standardize formats
Create calculated columns (Revenue, Profit, Units Sold, etc.)

2. Data Modeling

Establish relationships:
Orders[CustomerID] → Customer[CustomerID]
Orders[Date] → Date[Date]
Create measures for:
Revenue YTD
Profit YTD
Units Sold YTD
Customer Lifetime Value (CLV)
Customers Acquired YTD

3. Dashboard Design

Row 1 – KPI Cards
Revenue YTD
Profit YTD
Units Sold YTD
Customers Acquired YTD
Customer Lifetime Value (CLV)

Row 2 – Trend & Distribution Charts
Sales Distribution (Bar/Column charts by product category)
Revenue by Region (Map visual)
Customer Segmentation (High / Medium / Low revenue buckets)

Row 3 – Insights & Analysis
Gauge: Orders Achievement YTD
Line chart: Revenue Trend over Months (Top N Customers)
Narrative card for key insights
Measure Calculation Flow
Revenue YTD = SUM(Revenue) filtered by Year
Profit YTD  = SUM(Profit) filtered by Year
Units Sold YTD = SUM(Units)
CLV = Revenue per Customer
Customers Acquired = COUNT(New Customers in Year)

Technologies Used

Power BI (Dashboard and Visuals)
DAX (Measures and KPIs)
Power Query (Data Cleaning and Transformation)
Data Modeling (Relationships and Aggregations)

Outcome
Comprehensive 3-page dashboard providing actionable insights.
Enables executives to track performance, identify top products/customers, and optimize strategy.


Combines descriptive, diagnostic, and predictive analytics in a user-friendly format.

