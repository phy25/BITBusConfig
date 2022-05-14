export enum ScheduleDays {
    // v1 Monday to Friday
    V1_MONDAY = 1,
    V1_TUESDAY = 2,
    V1_WEDNESDAY = 3,
    V1_THURSDAY = 4,
    V1_FRIDAY = 5,
    // v1 Friday as regular weekday
    V1_FRIDAY_AS_REGULAR = 25,
    // v1 weekend
    V1_WEEKEND = 6,
    // v1 holiday
    V1_HOLIDAY = 0,
    // v1 exam week
    V1_EXAMDAY = 9,
    // v1 + H2O Monday to Friday
    V1_H2O_MONDAY = 11,
    V1_H2O_TUESDAY = 12,
    V1_H2O_WEDNESDAY = 13,
    V1_H2O_THURSDAY = 14,
    V1_H2O_FRIDAY = 15,
    // v1 + H2O exam week
    V1_H2O_EXAMDAY = 19,
    // v1 H2O service only
    V1_H2O_ONLY = 10,
    // v3 + H2O Monday to Friday
    V3_H2O_MONDAY = 31,
    V3_H2O_TUESDAY = 32,
    V3_H2O_WEDNESDAY = 33,
    V3_H2O_THURSDAY = 34,
    V3_H2O_FRIDAY = 35,
    // v3 weekend
    V3_WEEKEND = 36,
    // v3 + H2O exam week
    V3_H2O_EXAMDAY = 39,
    // v3 H2O service only - not sure if this is used at all
    V3_H2O_ONLY = 30,
    // v4 + H2O Monday to Friday
    V4_H2O_MONDAY = 41,
    V4_H2O_TUESDAY = 42,
    V4_H2O_WEDNESDAY = 43,
    V4_H2O_THURSDAY = 44,
    V4_H2O_FRIDAY = 45,
    V4_WORKDAY = 40,
    // v4 2020 reduced
    V4_REDUCED_WORKDAY = 48,
    // v4 2020 orientation
    V4_ORIENTATION_DAY = 47,
    // v5 + H2O (LXE)
    V5_H2O_MONDAY = 51,
    V5_H2O_TUESDAY = 52,
    V5_H2O_WEDNESDAY = 53,
    V5_H2O_THURSDAY = 54,
    V5_H2O_FRIDAY = 55,
    // v5 enhanced weekend
    V5_WEEKEND = 56,
    // v6 + H2O
    V6_H2O_MONDAY = 61,
    V6_H2O_TUESDAY = 62,
    V6_H2O_WEDNESDAY = 63,
    V6_H2O_THURSDAY = 64,
    V6_H2O_FRIDAY = 65,
    V6_SPORTSDAY = 67,
    V6_H2O_EXAMDAY = 67,
    V6_H2O_SUMMERDAY = 69,
    // v7 + H20
    V7_H2O_MONDAY = 71,
    V7_H2O_TUESDAY = 72,
    V7_H2O_WEDNESDAY = 73,
    V7_H2O_THURSDAY = 74,
    V7_H2O_FRIDAY = 75,
    V7_WEEKEND = 76,
    // Suspended
    SERVICE_SUSPENDED = 888,
};