# Sales Data ETL Automation

## Project Overview

This project demonstrates an automated **ETL (Extract, Transform, Load) pipeline** built with Python.

The pipeline reads multiple monthly sales CSV files, combines them into a single dataset, performs data cleaning and transformation, calculates key business metrics, and exports the processed data as a clean CSV file.

A **product-wise profit visualization** is also created using Matplotlib to provide a quick view of financial performance.

---

## Project Objective

The main objectives of this project are to:

- Automate data extraction from multiple monthly sales CSV files
- Combine and clean sales data for reporting and analysis
- Calculate business metrics such as **Profit**
- Export the transformed dataset for downstream analytics
- Visualize **Profit by Product**
- Prepare the output dataset for integration with **Power BI** or **Excel**

---

## Data Sources

The pipeline processes multiple monthly sales CSV files stored in the `raw_data/` directory.

### Raw Files

- `sales_jan.csv`
- `sales_feb.csv`
- `sales_mar.csv`

Each file contains sales-related fields such as:

- `Date`
- `Product`
- `Category`
- `Sales`
- `Cost`

The pipeline dynamically identifies CSV files from the input directory, allowing additional monthly files to be added without changing the core extraction logic.

---

## ETL Pipeline

### 1. Extract

Python's `os` and `glob` modules are used to automatically identify CSV files from the `raw_data/` directory.

The files are loaded dynamically using **Pandas**, rather than being individually hard-coded.

```text
raw_data/
├── sales_jan.csv
├── sales_feb.csv
└── sales_mar.csv

All available CSV files are discovered and loaded into the pipeline.

2. Transform

The extracted datasets are combined into a single DataFrame and prepared for analysis.

The transformation process includes:

Combining multiple monthly datasets
Standardizing column names where required
Removing duplicate records
Calculating the Profit metric
Profit Calculation
Profit = Sales - Cost

This creates an additional business metric that can be used for profitability analysis and reporting.

3. Load

The transformed dataset is exported as a CSV file:

output_data/clean_sales_sampleoutputfiles.csv

The resulting dataset is structured for further analysis and can be consumed by tools such as:

Power BI
Microsoft Excel
Python analytics workflows
4. Visualization

A bar chart is created using Matplotlib to visualize:

Profit by Product

The visualization provides a quick way to:

Compare product profitability
Identify high-profit products
Identify relatively low-profit products
Understand product-level financial performance
Project Workflow
Monthly Sales CSV Files
          │
          ▼
    Data Extraction
          │
          ▼
   Data Consolidation
          │
          ▼
 Data Cleaning & Transformation
          │
          ▼
   Calculate Profit
   Sales - Cost
          │
          ▼
    Clean CSV Output
          │
          ├──────────────► Power BI / Excel
          │
          ▼
 Profit by Product
    Visualization
Technologies Used
Technology	Purpose
Python	ETL pipeline development
Pandas	Data loading, transformation, and analysis
Glob	Dynamic CSV file discovery
OS	File and directory handling
Matplotlib	Data visualization
Jupyter Notebook	Development and execution environment
Project Structure
ETL_Automation_Project/
│
├── raw_data/
│   ├── sales_jan.csv
│   ├── sales_feb.csv
│   └── sales_mar.csv
│
├── sales_etl.ipynb
│
├── output_data/
│   └── clean_sales_sampleoutputfiles.csv
│
└── README.md
Key Business Metric
Profit

The pipeline calculates product profitability using:

Profit = Sales - Cost

This metric provides a simple measure of the financial contribution of each product and is used for the final product-level visualization.

Key Outcomes

The project demonstrates a reusable Python-based ETL workflow that can:

Dynamically process multiple sales files
Consolidate monthly datasets
Perform basic data cleaning and transformation
Generate business metrics
Produce a reporting-ready CSV dataset
Visualize product-level profitability
Prepare data for downstream BI reporting
Future Enhancements
1. Power BI Integration

Connect the cleaned CSV dataset to Power BI to build an interactive sales and profitability dashboard.

2. Scheduled Automation

Automate recurring ETL execution using:

Windows Task Scheduler
Apache Airflow
3. Error Handling

Add validation and exception handling for:

Missing files
Invalid data types
Malformed CSV files
Missing required columns
4. Logging

Implement ETL execution logs to track:

Pipeline execution status
Processed files
Record counts
Transformation results
Errors and failures
5. Data Validation

Add automated checks for:

Missing values
Duplicate records
Invalid sales or cost values
Inconsistent column structures
6. Scalable Processing

Extend the pipeline to support larger datasets and additional sales data sources.

Output
Cleaned Dataset

The ETL pipeline generates:

output_data/clean_sales_sampleoutputfiles.csv

The file contains the consolidated and transformed sales data and can be used for further analytics or BI reporting.

Profit Visualization

The notebook generates a Profit by Product bar chart for quick comparison of product-level profitability.

Conclusion

Sales Data ETL Automation demonstrates the fundamental stages of a practical data pipeline:

Extract → Transform → Load → Analyze

By automating the ingestion of monthly sales files, transforming the data, calculating business metrics, and producing a clean reporting dataset, this project demonstrates practical skills in:

Python ETL
Data Cleaning
Data Transformation
Business Metric Calculation
Data Analysis
Data Visualization
Reporting Data Preparation

### GitHub tip

Save this exact content as:

```text
README.md

and keep it at:

ETL_Automation_Project/
└── README.md
