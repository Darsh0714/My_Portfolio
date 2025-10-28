Sales Data ETL Automation

Project Overview

This project demonstrates an automated ETL (Extract, Transform, Load) pipeline using Python.
It reads multiple monthly sales CSV files, merges them into one dataset, performs data cleaning and transformation, calculates key business metrics, and exports a cleaned CSV output.
A final visualization displays product-wise profit, making it easy to track financial performance.

Project Objective

Automate data extraction from multiple sales CSV files
Transform and clean data to prepare for reporting
Add business metrics such as Profit (Sales – Cost)
Export the cleaned dataset for analytics or Power BI integration
Visualize Profit by Product for quick insights

Data Sources

Raw Sales Files: Multiple monthly CSV files (sales_jan.csv, sales_feb.csv, sales_mar.csv)
Each file contains columns like Date, Product, Category, Sales, and Cost.

Project Flow
1. Data Extraction

Used Python’s os and glob modules to automatically fetch all CSV files from a given folder.
Loaded data dynamically using pandas.

2. Data Transformation

Combined all CSV files into a single DataFrame.
Calculated Profit = Sales - Cost.
Removed duplicates and standardized column names (if required).

3. Data Loading

Exported the cleaned dataset into a new CSV file: clean_sales.csv.

4. Data Visualization

Created a bar chart using Matplotlib to show Profit by Product.
Helped identify the most profitable items quickly.

Technologies Used

Python Libraries: pandas, glob, os, matplotlib
Environment: Jupyter Notebook

Output: Cleaned CSV file + Profit visualization

Outcome

Automated ETL pipeline that can dynamically handle new data files
Ready-to-use dataset for Power BI or Excel reporting
Demonstrated fundamental data engineering workflow using Python

Folder Structure
ETL_Automation_Project/
│
├── raw_data/
│   ├── sales_jan.csv
│   ├── sales_feb.csv
│   ├── sales_mar.csv
│
├── sales_etl.ipynb
├── output_data/
|    ├── clean_sales_sampleoutputfiles.csv
└── README.md

Next Steps

Integrate cleaned CSV into Power BI dashboard for visualization
Add automation using Task Scheduler or Airflow for scheduled ETL runs
Extend to include error handling and log generation
