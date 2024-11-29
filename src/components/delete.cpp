#include <iostream>
using namespace std;

// Function to delete an element at a specific position
void deleteElement(int arr[], int& n, int position) {
    if (position < 0 || position >= n) { // Validate position
        cout << "Invalid position!" << endl;
        return;
    }

    // Shift elements to the left to overwrite the element at the position
    for (int i = position; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Decrease the size of the array
    n--;

    cout << "Element deleted successfully!" << endl;
}

// Function to print the array
void printArray(int arr[], int n) {---
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[100] = {10, 20, 30, 40, 50}; // Initialize array with size 100
    int n = 5; // Current size of the array

    cout << "Original Array: ";
    printArray(arr, n);

    int position;
    cout << "Enter the position of the element to delete (0-based index): ";
    cin >> position;

    deleteElement(arr, n, position);

    cout << "Array after deletion: ";
    printArray(arr, n);

    return 0;
}
