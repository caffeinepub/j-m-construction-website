import List "mo:core/List";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type ContactEntry = {
    name : Text;
    companyName : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactEntry {
    public func compareByTimestamp(entry1 : ContactEntry, entry2 : ContactEntry) : Order.Order {
      Int.compare(entry1.timestamp, entry2.timestamp);
    };
  };

  type ContactEntryView = {
    id : Nat;
    entry : ContactEntry;
  };

  let contactEntries = List.empty<ContactEntryView>();

  // Submit a contact request
  public shared ({ caller }) func submitContactEntry(name : Text, companyName : Text, email : Text, message : Text, timestamp : Int) : async Nat {
    let newEntry : ContactEntry = {
      name;
      companyName;
      email;
      message;
      timestamp;
    };

    let newId = contactEntries.size();
    let entryView : ContactEntryView = {
      id = newId;
      entry = newEntry;
    };

    contactEntries.add(entryView);
    newId;
  };

  // Admin: Get a contact request by id
  public query ({ caller }) func getContactEntry(id : Nat) : async ContactEntry {
    if (id >= contactEntries.size()) {
      Runtime.trap("Contact entry with id " # id.toText() # " does not exist.");
    };
    let view = contactEntries.at(id);
    view.entry;
  };

  // Admin: Get all contact requests in descending chronological order
  public query ({ caller }) func getAllContactEntries() : async [ContactEntry] {
    contactEntries.toArray().map(func(entryView) { entryView.entry });
  };
};
