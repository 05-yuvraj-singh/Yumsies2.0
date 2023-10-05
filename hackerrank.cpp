bool checkUnder(string s){
    for(long unsigned int i=0;i<s.size();i++){
        if(s[i]=='_')return true;
    }
    return false;
}
string happyLadybugs(string b) {
    if(checkUnder(b)){
        unordered_map<char,int> freq;
        for(long unsigned int i=0;i<b.size();i++){
            if(b[i]!='_')freq[b[i]]++;
        }
        
        for(auto i:freq){
            if(i.second<2)return "NO";
        }
        return "YES";
    }
    else{
        for(long unsigned int i=1;i<b.size()-1;i++){
            if(b[i-1]!=b[i] || b[i+1]!=b[i])return "NO";
        }
        return "YES";
    }
}
