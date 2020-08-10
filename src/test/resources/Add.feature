@UnitTesting
Feature: Add numbers

  Scenario Outline: Add positive numbers
    Given two positive numbers "<thisNumber>" and "<thatNumber>"
    When they are added the output must be "<result>"

    Examples:
      | thisNumber | thatNumber | result |
      | 1          | 1          | 2      |
      | 2          | 3          | 5      |
      | 0          | 2          | 0      |
      | -2         | 8          | 0      |
      | 3          | -1         | 0      |
      | -2         | -2         | 0      |