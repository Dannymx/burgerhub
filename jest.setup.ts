// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import failOnConsole from "jest-fail-on-console";
import "@testing-library/jest-dom";

failOnConsole();
