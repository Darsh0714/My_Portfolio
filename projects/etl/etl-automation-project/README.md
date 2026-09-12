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
