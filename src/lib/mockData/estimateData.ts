const data = [
  {
    "item": "Minor Design 1",
    "estCost": 9243.7,
    "actCost": 8604.86,
    "estRev": 15204.79,
    "actRev": 15644.39,
    "total": 7039.53,
    "profitPct": "81.81%"
  },
  {
    "item": "Server Maintenance 2",
    "estCost": 3672.61,
    "actCost": 3369.88,
    "estRev": 5456.06,
    "actRev": 5415.61,
    "total": 2045.73,
    "profitPct": "60.71%"
  },
  {
    "item": "Graphic Design 3",
    "estCost": 4480.92,
    "actCost": 4458.3,
    "estRev": 7435.52,
    "actRev": 6844.69,
    "total": 2386.39,
    "profitPct": "53.53%"
  },
  {
    "item": "Phase Support 4",
    "estCost": 1653.29,
    "actCost": 1797.15,
    "estRev": 2607.18,
    "actRev": 2740.22,
    "total": 943.07,
    "profitPct": "52.48%"
  },
  {
    "item": "Tactical Marketing 5",
    "estCost": 3867.39,
    "actCost": 4235.21,
    "estRev": 5509.37,
    "actRev": 5585.53,
    "total": 1350.32,
    "profitPct": "31.88%"
  },
  {
    "item": "Supporting Marketing 6",
    "estCost": 3286.35,
    "actCost": 3113.42,
    "estRev": 5040.19,
    "actRev": 5186.6,
    "total": 2073.18,
    "profitPct": "66.59%"
  },
  {
    "item": "Major Testing 7",
    "estCost": 4468.81,
    "actCost": 4248.06,
    "estRev": 7232.8,
    "actRev": 7705.03,
    "total": 3456.97,
    "profitPct": "81.38%"
  },
  {
    "item": "Major Deployment 8",
    "estCost": 4219.86,
    "actCost": 4058.71,
    "estRev": 5436.89,
    "actRev": 5817.73,
    "total": 1759.02,
    "profitPct": "43.34%"
  },
  {
    "item": "Initial Testing 9",
    "estCost": 1437.49,
    "actCost": 1505.09,
    "estRev": 1752.19,
    "actRev": 1715.83,
    "total": 210.74,
    "profitPct": "14.0%"
  },
  {
    "item": "Minor Support 10",
    "estCost": 4766.0,
    "actCost": 4730.5,
    "estRev": 6022.39,
    "actRev": 5745.97,
    "total": 1015.47,
    "profitPct": "21.47%"
  },
  {
    "item": "Tactical Integration 11",
    "estCost": 3583.43,
    "actCost": 3640.58,
    "estRev": 6181.33,
    "actRev": 5667.85,
    "total": 2027.27,
    "profitPct": "55.69%"
  },
  {
    "item": "Strategic Maintenance 12",
    "estCost": 6683.25,
    "actCost": 6185.21,
    "estRev": 8763.79,
    "actRev": 8893.12,
    "total": 2707.91,
    "profitPct": "43.78%"
  },
  {
    "item": "Major Consultation 13",
    "estCost": 9881.93,
    "actCost": 9135.94,
    "estRev": 12343.81,
    "actRev": 12389.97,
    "total": 3254.03,
    "profitPct": "35.62%"
  },
  {
    "item": "Phase Consultation 14",
    "estCost": 1856.03,
    "actCost": 1976.73,
    "estRev": 2325.76,
    "actRev": 2247.82,
    "total": 271.09,
    "profitPct": "13.71%"
  },
  {
    "item": "Minor Deployment 15",
    "estCost": 3070.89,
    "actCost": 2953.14,
    "estRev": 4351.95,
    "actRev": 4350.76,
    "total": 1397.62,
    "profitPct": "47.33%"
  },
  {
    "item": "Major Support 16",
    "estCost": 9755.69,
    "actCost": 10274.98,
    "estRev": 16563.06,
    "actRev": 16809.27,
    "total": 6534.29,
    "profitPct": "63.59%"
  },
  {
    "item": "Critical Integration 17",
    "estCost": 4497.74,
    "actCost": 4090.18,
    "estRev": 6074.79,
    "actRev": 5507.7,
    "total": 1417.52,
    "profitPct": "34.66%"
  },
  {
    "item": "Core Marketing 18",
    "estCost": 6469.95,
    "actCost": 6708.72,
    "estRev": 10375.32,
    "actRev": 9641.87,
    "total": 2933.15,
    "profitPct": "43.72%"
  },
  {
    "item": "Core Marketing 19",
    "estCost": 3092.69,
    "actCost": 2866.07,
    "estRev": 4689.33,
    "actRev": 5111.27,
    "total": 2245.2,
    "profitPct": "78.34%"
  },
  {
    "item": "Critical Development 20",
    "estCost": 3652.26,
    "actCost": 3663.65,
    "estRev": 6120.93,
    "actRev": 6086.61,
    "total": 2422.96,
    "profitPct": "66.14%"
  },
  {
    "item": "Minor Consultation 21",
    "estCost": 9731.97,
    "actCost": 9472.2,
    "estRev": 15945.95,
    "actRev": 17097.4,
    "total": 7625.2,
    "profitPct": "80.5%"
  },
  {
    "item": "Critical Testing 22",
    "estCost": 3619.27,
    "actCost": 3980.92,
    "estRev": 4893.22,
    "actRev": 4778.75,
    "total": 797.83,
    "profitPct": "20.04%"
  },
  {
    "item": "Tactical Maintenance 23",
    "estCost": 5379.5,
    "actCost": 5702.35,
    "estRev": 7048.74,
    "actRev": 7444.56,
    "total": 1742.21,
    "profitPct": "30.55%"
  },
  {
    "item": "Tactical Design 24",
    "estCost": 4278.45,
    "actCost": 4374.3,
    "estRev": 7217.43,
    "actRev": 6765.73,
    "total": 2391.43,
    "profitPct": "54.67%"
  },
  {
    "item": "Strategic Consultation 25",
    "estCost": 4901.01,
    "actCost": 5077.58,
    "estRev": 8376.5,
    "actRev": 8384.88,
    "total": 3307.3,
    "profitPct": "65.14%"
  },
  {
    "item": "Phase Integration 26",
    "estCost": 5172.38,
    "actCost": 4992.84,
    "estRev": 7692.96,
    "actRev": 8291.12,
    "total": 3298.28,
    "profitPct": "66.06%"
  },
  {
    "item": "Major Integration 27",
    "estCost": 4420.56,
    "actCost": 4471.89,
    "estRev": 5465.04,
    "actRev": 5512.99,
    "total": 1041.1,
    "profitPct": "23.28%"
  },
  {
    "item": "Supporting Deployment 28",
    "estCost": 8097.12,
    "actCost": 8858.93,
    "estRev": 13220.96,
    "actRev": 12125.55,
    "total": 3266.62,
    "profitPct": "36.87%"
  },
  {
    "item": "Tactical Consultation 29",
    "estCost": 8705.94,
    "actCost": 9316.15,
    "estRev": 11703.91,
    "actRev": 12174.05,
    "total": 2857.9,
    "profitPct": "30.68%"
  },
  {
    "item": "Auxiliary Research 30",
    "estCost": 6441.58,
    "actCost": 6457.01,
    "estRev": 9032.94,
    "actRev": 9820.45,
    "total": 3363.44,
    "profitPct": "52.09%"
  }
]

export default data;