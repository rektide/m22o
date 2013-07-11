`Map` is great. Yet Map is not an object Map thus sucks.

If you've found yourself here, "Objects are first class, why must map be so second?," boy do we have a library for you!

# Map Map-to-Object

Map functions like a second class object in many regards: there are slots that can be get and set. Map, however, is far more flexible, which is it's greatness, that and that as a second-class construct it bears an extensibility (so long as one implements the Map interface one is good to go, the Golden tennant of Predicate Typing: I do therefore I am).

If you behave yourself though, a Map looks a lot like an object. Oh sure, keys can be more than Strings or Numbers, and if you cross this mismatch you're doomed, but sometimes we're fine with caveats if they're well proclaimed.

So, this implements this bad idea. If you like Maps, but want them to look like objects, Map Map To Object. This spits out an "object" backed by a map. Some proxy magic exists, lose 1d2 sanity points for reading this, and gain 1d3 arcane knowledge points for investigating code.

# Danger

If you use non-String keys in Map very very strange things may arise or your runtime may fault and terminate.
