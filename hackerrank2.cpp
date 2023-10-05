
bool checkCondition(vector<int> v , int k ){
    for(long unsigned int i=0;i<v.size();i++){
        for(long unsigned int j=i+1;j<v.size();j++){
            if((v[i]+v[j])%k ==0 )return false;
        }
    }
    return true;
}
int nonDivisibleSubset(int k, vector<int> s) {
    vector<int> temp;
    temp.push_back(s[0]);
    for(long unsigned int i=1;i<s.size();i++){
        temp.push_back(s[i]);
        if(!checkCondition(temp,k)){
            cout<<"element removed:"<<temp[temp.size()-1]<<" ... ";
            temp.pop_back();
        }
    }
    for(long unsigned int i=0 ; i<temp.size();i++)cout<<temp[i]<<" ";
    return temp.size();
}
