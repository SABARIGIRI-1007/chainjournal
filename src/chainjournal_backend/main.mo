import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Array "mo:base/Array";

actor {
  type Entry = {
    id: Nat;
    content: Text;
    timestamp: Int;
  };

  var entries: [Entry] = [];
  var nextId: Nat = 0;

  public func addEntry(content: Text): async Text {
    let entry: Entry = {
      id = nextId;
      content = content;
      timestamp = Time.now();
    };
    entries := Array.append(entries, [entry]);
    nextId += 1;
    return "Entry added successfully!";
  };

  public func getEntries(): async [Entry] {
    return entries;
  };

  public func deleteEntry(id: Nat): async Text {
    entries := Array.filter<Entry>(entries, func(e) { e.id != id });
    return "Entry deleted successfully!";
  };
}
