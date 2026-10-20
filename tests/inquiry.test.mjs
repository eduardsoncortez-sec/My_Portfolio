import assert from "node:assert/strict";
import test from "node:test";
import { buildInquiry, validateInquiry } from "../src/lib/inquiry.ts";

const valid = { service: "Business website", name: " Example Client ", email: " client@example.com ", organization: "", goal: "A school website with an inquiry page and a program directory.", timeline: "", budget: "" };

test("computer support inquiries retain their chosen service in the email draft", () => {
  const inquiry = { ...valid, service: "Computer servicing / technical support" };
  assert.deepEqual(validateInquiry(inquiry), {});
  const draft = buildInquiry(inquiry, "owner@example.com");
  assert.equal(new URL(draft.mailto).searchParams.get("subject"), `Project inquiry: ${inquiry.service}`);
  assert.ok(draft.body.includes(`Service: ${inquiry.service}`));
});

test("missing or whitespace-only required fields cannot advance", () => {
  const errors = validateInquiry({ ...valid, name: "  ", email: "not-an-email", goal: "   ", service: "Unknown" });
  assert.deepEqual(Object.keys(errors).sort(), ["email", "goal", "name", "service"]);
});

test("optional fields can be left blank", () => {
  assert.deepEqual(validateInquiry(valid), {});
  const draft = buildInquiry(valid, "owner@example.com");
  assert.match(draft.body, /Name: Example Client\nEmail: client@example.com/);
  assert.match(draft.body, /Organization: Not specified/);
});

test("email draft preserves punctuation, Unicode, and line breaks without injecting parameters", () => {
  const goal = "A website for art & design? Include #projects.\nBudget ₱30,000 + extras.";
  const draft = buildInquiry({ ...valid, goal }, "owner@example.com");
  const url = new URL(draft.mailto);
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "owner@example.com");
  assert.equal(url.searchParams.get("subject"), "Project inquiry: Business website");
  assert.equal(url.searchParams.get("body"), draft.body);
  assert.ok(draft.body.includes(goal));
  assert.deepEqual([...url.searchParams.keys()], ["subject", "body"]);
});
