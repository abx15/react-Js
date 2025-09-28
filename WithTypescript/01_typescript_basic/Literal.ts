type Role = "admin" | "user" | "guest";

function getDashboard(role: Role) {
    if (role === "admin") return "Admin Dashboard";
    if (role === "user") return "User Dashboard";
    return "Guest Page";
}

console.log(getDashboard("admin"));  // ✅ "Admin Dashboard"


type Signal = "red" | "yellow" | "green";

function action(signal: Signal) {
    switch (signal) {
        case "red": return "Stop 🚦";
        case "yellow": return "Get Ready ⚠️";
        case "green": return "Go ✅";
    }
}

console.log(action("green"));   // "Go ✅"

type PaymentStatus = "pending" | "completed" | "failed";

let paymentStatus: PaymentStatus = "pending" as PaymentStatus;

if (paymentStatus === "completed") {
    console.log("✅ Payment Successful");
} else if (paymentStatus === "failed") {
    console.log("❌ Payment Failed");
} else {
    console.log("⌛ Payment Pending");
}
