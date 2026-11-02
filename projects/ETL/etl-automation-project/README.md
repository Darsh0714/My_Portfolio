
# Sales Data ETL Automation

## Project Overview

This project demonstrates an automated **ETL (Extract, Transform, Load) pipeline** using Python.

The pipeline reads multiple monthly sales CSV files, combines them into a single dataset, performs data cleaning and transformation, calculates key business metrics, and exports a cleaned CSV output.

A final visualization displays **product-wise profit**, making it easier to compare financial performance across products.

---

## Project Objective

The main objectives of this project are to:

- Automate data extraction from multiple monthly sales CSV files
- Combine multiple datasets into a single consolidated dataset
- Clean and transform the extracted sales data
- Calculate business metrics such as **Profit**
- Export the cleaned dataset for analytics and reporting
- Visualize **Profit by Product**
- Prepare the processed dataset for integration with **Power BI** or **Excel**

---

## Data Sources

The project uses multiple monthly sales CSV files stored inside the `raw_data/` directory.

### Raw Sales Files

- `sales_jan.csv`
- `sales_feb.csv`
- `sales_mar.csv`

Each sales file contains columns such as:

| Column | Description |
|---|---|
| `Date` | Sales transaction date |
| `Product` | Product associated with the transaction |
| `Category` | Product category |
| `Sales` | Sales/revenue amount |
| `Cost` | Cost associated with the sale |

The pipeline dynamically discovers CSV files from the `raw_data/` directory instead of manually specifying each file.

This allows the pipeline to process additional monthly sales files without requiring major changes to the extraction logic.

---

## Project Workflow

The complete workflow follows the traditional ETL process:

```text
Extract → Transform → Load → Analyze
````

### Overall Pipeline

```text
                 ┌──────────────────────┐
                 │ Monthly Sales CSVs   │
                 │ Jan / Feb / Mar      │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │       EXTRACT        │
                 │ Discover CSV files   │
                 │ Load using Pandas    │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │      TRANSFORM       │
                 │ Combine datasets     │
                 │ Clean data           │
                 │ Remove duplicates     │
                 │ Calculate Profit     │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │        LOAD          │
                 │ Export clean CSV     │
                 │ clean_sales.csv      │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │      ANALYZE         │
                 │ Profit by Product    │
                 │ Matplotlib Chart     │
                 └──────────────────────┘
```

---

## ETL Pipeline

## 1. Data Extraction

The extraction stage automatically identifies all CSV files available in the `raw_data/` directory.

Python's `os` and `glob` modules are used to discover the available files dynamically.

The datasets are then loaded using **Pandas**.

Example approach:

```python
import os
import glob
import pandas as pd
```

The pipeline is designed to avoid manually loading each monthly file individually.

For example, instead of explicitly loading:

```text
sales_jan.csv
sales_feb.csv
sales_mar.csv
```

the pipeline searches the input directory for available CSV files.

This makes the extraction process more reusable when new monthly files are added.

---

## 2. Data Transformation

After extraction, the individual datasets are combined into a single DataFrame.

The transformation stage prepares the consolidated data for analysis and reporting.

### Transformation Steps

The pipeline performs the following transformations:

* Combine multiple monthly CSV datasets
* Standardize column names where required
* Remove duplicate records
* Calculate the **Profit** business metric
* Prepare the final dataset for export

### Profit Calculation

The project calculates profit using:

```text
Profit = Sales - Cost
```

This adds a useful business metric to the consolidated sales dataset.

The calculated `Profit` column can then be used to analyze product-level financial performance.

---

## 3. Data Loading

After the transformation stage is complete, the cleaned dataset is exported as a CSV file.

The output file is stored inside the `output_data/` directory.

```text
output_data/clean_sales_sampleoutputfiles.csv
```

The resulting dataset can be used for:

* Python-based analytics
* Excel reporting
* Power BI dashboards
* Further ETL processing
* Business reporting

---

## 4. Data Visualization

The final stage of the project uses **Matplotlib** to visualize product-level profitability.

A bar chart is created to display:

```text
Profit by Product
```

This visualization provides a quick way to compare the profitability of different products.

### Visualization Benefits

The chart can help identify:

* Products generating higher profit
* Products generating relatively lower profit
* Differences in profitability between products
* Overall product-level financial performance

---

# Technologies Used

| Technology / Library | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| **Python**           | Core ETL pipeline development                        |
| **Pandas**           | Data loading, transformation, cleaning, and analysis |
| **Glob**             | Dynamic CSV file discovery                           |
| **OS**               | File and directory handling                          |
| **Matplotlib**       | Profit visualization                                 |
| **Jupyter Notebook** | Development and execution environment                |

---

# Project Structure

```text
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
```

---

# File Description

| File / Directory                    | Description                                  |
| ----------------------------------- | -------------------------------------------- |
| `raw_data/`                         | Contains the raw monthly sales CSV files     |
| `sales_jan.csv`                     | January sales data                           |
| `sales_feb.csv`                     | February sales data                          |
| `sales_mar.csv`                     | March sales data                             |
| `sales_etl.ipynb`                   | Jupyter Notebook containing the ETL pipeline |
| `output_data/`                      | Contains processed output files              |
| `clean_sales_sampleoutputfiles.csv` | Cleaned and consolidated sales dataset       |
| `README.md`                         | Project documentation                        |

---

# Key Business Metric

## Profit

The main calculated business metric in this project is **Profit**.

The calculation is:

```text
Profit = Sales - Cost
```

### Example

```text
Sales = 1000
Cost  = 700

Profit = 1000 - 700
       = 300
```

The calculated profit value is used to generate the **Profit by Product** visualization.

---

# Key Outcomes

The project demonstrates a reusable Python-based ETL workflow capable of:

* Dynamically discovering input CSV files
* Processing multiple monthly sales datasets
* Combining datasets into a consolidated DataFrame
* Performing basic data cleaning
* Removing duplicate records
* Calculating business metrics
* Exporting a clean CSV dataset
* Creating product-level profitability visualizations
* Preparing data for downstream reporting tools

---

# Output

## Cleaned Dataset

The ETL pipeline produces the following output:

```text
output_data/clean_sales_sampleoutputfiles.csv
```

The output dataset contains the consolidated and transformed sales information.

It can be used as a source for further analysis, reporting, or BI integration.

---

## Profit Visualization

The project generates a bar chart showing:

```text
Profit by Product
```

The visualization provides a simple business view of product-level profitability and makes it easier to identify differences in financial performance.

---

# How to Run the Project

## 1. Clone the Repository

Clone the project repository to your local machine.

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd ETL_Automation_Project
```

---

## 2. Install Required Libraries

Install the required Python libraries:

```bash
pip install pandas matplotlib jupyter
```

The project uses Python's built-in `os` and `glob` modules, so they do not require separate installation.

---

## 3. Verify the Input Files

Make sure the monthly CSV files are available inside:

```text
raw_data/
```

For example:

```text
raw_data/
├── sales_jan.csv
├── sales_feb.csv
└── sales_mar.csv
```

---

## 4. Open the Jupyter Notebook

Start Jupyter Notebook:

```bash
jupyter notebook
```

Open:

```text
sales_etl.ipynb
```

---

## 5. Run the ETL Pipeline

Execute the notebook cells in sequence.

The pipeline will:

1. Discover the CSV files
2. Load the sales datasets
3. Combine the datasets
4. Clean and transform the data
5. Calculate Profit
6. Export the cleaned dataset
7. Generate the Profit by Product visualization

---

# Future Enhancements

## 1. Power BI Integration

The cleaned CSV output can be connected to **Power BI** to create an interactive sales and profitability dashboard.

Potential dashboard metrics include:

* Total Sales
* Total Cost
* Total Profit
* Profit by Product
* Profit by Category
* Monthly Sales
* Monthly Profit

---

## 2. Scheduled ETL Automation

The pipeline can be scheduled to run automatically using:

* **Windows Task Scheduler**
* **Apache Airflow**

This would allow new monthly sales files to be processed automatically without manually running the notebook.

---

## 3. Error Handling

The pipeline can be enhanced with error handling for scenarios such as:

* Missing input files
* Empty CSV files
* Invalid data types
* Missing required columns
* Malformed CSV files
* Unexpected file structures

---

## 4. Logging

A logging system can be added to record:

* ETL execution time
* Files processed
* Number of records processed
* Successful pipeline runs
* Failed pipeline runs
* Transformation errors

This would make the pipeline easier to monitor and troubleshoot.

---

## 5. Data Validation

Additional data quality checks can be introduced for:

* Missing values
* Duplicate records
* Invalid sales values
* Invalid cost values
* Negative or unexpected values
* Inconsistent column names
* Inconsistent data types

---

## 6. Scalable Data Processing

The pipeline can be extended to process larger datasets and additional data sources.

Future versions could incorporate:

* SQL databases
* Cloud storage
* APIs
* Data warehouses
* Batch processing
* Automated data quality checks

---

# Business Use Case

This project represents a simplified version of a common business data workflow.

Organizations often receive sales data from multiple periods or sources. Before the data can be used for reporting, it needs to be:

1. Collected
2. Consolidated
3. Cleaned
4. Transformed
5. Enriched with business metrics
6. Loaded into a reporting-ready format
7. Visualized for decision-making

This project demonstrates that workflow using Python and CSV-based sales data.

---

# Skills Demonstrated

This project demonstrates practical experience in:

* **Python**
* **ETL Development**
* **Data Extraction**
* **Data Cleaning**
* **Data Transformation**
* **Pandas**
* **CSV Processing**
* **Business Metric Calculation**
* **Data Analysis**
* **Matplotlib**
* **Data Visualization**
* **Reporting Data Preparation**
* **Power BI-ready Data Processing**
* **Basic Data Engineering Workflow**

---

# Conclusion

**Sales Data ETL Automation** demonstrates the complete flow of a basic data engineering and analytics pipeline:

```text
Extract
   ↓
Transform
   ↓
Load
   ↓
Analyze
```

The project automates the processing of multiple monthly sales files, consolidates them into a single dataset, performs basic data cleaning and transformation, calculates **Profit**, exports the processed data, and creates a product-level profitability visualization.

The resulting workflow provides a practical foundation for extending the project into a more advanced automated data pipeline with scheduled execution, logging, validation, and Power BI reporting.

```
```
